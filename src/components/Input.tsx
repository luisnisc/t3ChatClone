import React, { useRef, useEffect } from "react";

export default function Input() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.max(64, textarea.scrollHeight)}px`;
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <div className="mx-auto">
      <div className="relative border-[#F9DCFD] dark:border-purple-600 bg-[#FBF0FB] dark:bg-gray-800 rounded-2xl border-8 shadow-lg w-[42rem] h-[8rem] overflow-hidden transition-colors duration-200">
        <div className="p-4 pb-2 h-full flex flex-col">
          <textarea
            ref={textareaRef}
            placeholder="Escribe tu mensaje aquí..."
            className="w-full flex-1 resize-none focus:outline-none focus:ring-0 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 text-base leading-relaxed"
            onInput={handleResize}
          />
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <select
              name="models"
              id="models"
              className="text-sm text-[#AC1668] dark:text-purple-300 bg-transparent hover:bg-[#F9DCFD] dark:hover:bg-gray-700 focus:bg-[#F9DCFD] dark:focus:bg-gray-700 focus:outline-none rounded-lg px-2 py-1 border border-transparent hover:border-[#F9DCFD] dark:hover:border-gray-600 transition-all"
            >
              <option value="deepseek">DeepSeek</option>
            </select>

            <button className="bg-[#F9DCFD] dark:bg-gray-700 text-[#AC1668] dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-gray-600 focus:bg-purple-200 dark:focus:bg-gray-600 rounded-full px-3 py-2 text-sm font-medium transition-all flex items-center gap-2 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>

            <button
              className="bg-[#F9DCFD] dark:bg-gray-700 text-[#AC1668] dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-gray-600 focus:bg-purple-200 dark:focus:bg-gray-600 rounded-full p-2 transition-all hover:scale-105"
              title="Adjuntar archivo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>
          </div>

          <button className="text-white bg-[#CE98B4] dark:bg-purple-600 hover:bg-purple-400 dark:hover:bg-purple-500 focus:bg-purple-400 dark:focus:bg-purple-500 rounded-full px-4 py-2 text-sm font-semibold transition-all flex items-center gap-2 hover:scale-105 focus:outline-none">
            <span>Enviar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
