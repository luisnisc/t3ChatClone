import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="w-64 h-full bg-[#F4E5F6] dark:bg-[#1E2939] shadow-lg p-4 rounded-lg absolute top-0 left-0 text-center transition-colors duration-200">
        <h2 className="text-xl font-semibold mb-4 text-[#CA0277] dark:text-purple-300">
          ChAI
        </h2>
        <button className="bg-[#AB4774] hover:bg-[#D66B9E] dark:bg-purple-600 dark:hover:bg-purple-500 focus:bg-purple-200 dark:focus:bg-purple-700 rounded-full px-4 py-2 text-sm font-semibold transition-all flex items-center gap-2 hover:scale-105 focus:outline-none w-full justify-center text-white cursor-pointer">
          New Chat
        </button>
        <div className="relative mt-6">
          <div className="relative flex items-center">
            <svg
              className="absolute left-3 h-4 w-4 text-[#D386B9] dark:text-purple-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search your threads"
              className="w-full pl-10 pr-3 py-2 text-sm text-[#D386B9] dark:text-purple-400 placeholder-[#D386B9] dark:placeholder-purple-400 bg-transparent focus:outline-none border-b border-[#D386B9] dark:border-purple-400 focus:border-[#CA0277] dark:focus:border-purple-300 transition-colors"
            />
          </div>
        </div>
      </div>
    </>
  );
}
