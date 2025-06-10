import React, { useEffect, useRef, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import Swal from "sweetalert2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../hooks/useTheme";

interface MessageProps {
  sender: "user" | "assistant";
  content: string;
  timestamp?: string;
}

interface ChatAreaProps {
  messages: MessageProps[];
}

export default function ChatArea({ messages }: ChatAreaProps) {
  const { theme } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Crear el estilo dinámicamente usando useMemo para forzar re-render
  const syntaxStyle = useMemo(() => {
    return theme === "dark" ? oneDark : oneLight;
  }, [theme]);

  // Crear el customStyle dinámicamente
  const customStyle = useMemo(
    () => ({
      margin: 0,
      borderRadius: "0 0 0.5rem 0.5rem",
      fontSize: "13px",
      lineHeight: "1.4",
      background:
        theme === "dark"
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)",
      maxWidth: "100%",
      overflow: "auto",
    }),
    [theme]
  );

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const hasCodeBlocks = (content: string) => {
    return (
      content.includes("```") ||
      (content.includes("`") && content.split("`").length > 2)
    );
  };

  return (
    <>
      <div className=" shadow-md dark:border-gray-600 h-[100%] bg-white dark:bg-gray-800 rounded-lg transition-colors duration-200">
        <div
          ref={chatContainerRef}
          className="p-4 overflow-y-auto h-full w-full scroll-smooth"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg break-words transition-all duration-300 ${
                  hasCodeBlocks(message.content)
                    ? "max-w-[90%] w-full"
                    : "max-w-[20em]"
                } ${
                  message.sender === "user"
                    ? "bg-pink-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-br-none"
                    : "bg-purple-100 dark:bg-purple-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
                }`}
              >
                <ReactMarkdown
                  components={{
                    code(
                      props: React.HTMLProps<HTMLElement> & {
                        className?: string;
                      }
                    ) {
                      const { className, children, ...rest } = props;
                      const inline = !className?.includes("language-");

                      if (inline) {
                        return (
                          <code
                            className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-md text-sm font-mono border border-purple-200 dark:border-gray-500 shadow-sm"
                            {...rest}
                          >
                            {children}
                          </code>
                        );
                      }

                      return (
                        <div className="relative my-4 group">
                          <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black px-4 py-2 rounded-t-lg border-b border-gray-600">
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              </div>
                              <span className="text-gray-400 text-sm font-mono">
                                {className?.replace("language-", "") || "code"}
                              </span>
                            </div>
                            <button
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 hover:bg-gray-700 dark:hover:bg-gray-600 rounded text-gray-300 hover:text-white"
                              onClick={() => {
                                navigator.clipboard.writeText(String(children));
                                Swal.fire({
                                  title: "Code copied!",
                                  text: "The code has been copied to your clipboard",
                                  icon: "success",
                                  toast: true,
                                  position: "top-end",
                                  timerProgressBar: true,
                                  timer: 2000,
                                  showConfirmButton: false,
                                  background:
                                    theme === "dark" ? "#1f2937" : "#ffffff",
                                  color:
                                    theme === "dark" ? "#f3f4f6" : "#1f2937",
                                });
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                width="18"
                                height="18"
                                strokeWidth="2"
                              >
                                <rect
                                  x="9"
                                  y="9"
                                  width="13"
                                  height="13"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="relative rounded-b-lg overflow-hidden">
                            <SyntaxHighlighter
                              key={`${theme}-${index}`} // Key simplificada pero efectiva
                              language={
                                className?.replace("language-", "") || "text"
                              }
                              style={syntaxStyle}
                              customStyle={customStyle}
                              showLineNumbers={true}
                              lineNumberStyle={{
                                color: theme === "dark" ? "#64748b" : "#94a3b8",
                                fontSize: "11px",
                                marginRight: "0.75rem",
                                minWidth: "2em",
                              }}
                              wrapLongLines={true}
                              lineProps={{
                                style: {
                                  wordBreak: "break-word",
                                  whiteSpace: "pre-wrap",
                                },
                              }}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                            <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-60"></div>
                          </div>
                        </div>
                      );
                    },
                  }}
                >
                  {message.content}
                </ReactMarkdown>
                {message.timestamp && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </>
  );
}
