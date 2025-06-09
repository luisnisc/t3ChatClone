import { useEffect, useState } from "react";
import Input from "./components/Input";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./hooks/useTheme";

function App() {
  // Inicializar el tema al cargar la aplicación
  useTheme();

  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="absolute top-0 right-0 p-4 z-10">
          <ThemeToggle />
        </div>
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center ml-64">
          <div className="w-[42rem] flex flex-col gap-4 h-full max-h-[calc(100vh-2rem)]">
            <div className="flex-1 min-h-0">
              <ChatArea />
            </div>
            <div className="flex-shrink-0">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
