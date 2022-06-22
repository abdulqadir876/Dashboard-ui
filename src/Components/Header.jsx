import React from "react";
import { AiFillBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-[80vw] mx-auto">
      <div className="flex justify-between items-center bg-pink-500 py-3">
        <h1 className="text-secondry text-lg font-medium">Dashboard</h1>
        <nav className="flex items-center gap-2">
          <span className="bg-white p-2 rounded-lg text-textColor">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </span>
          <span>
            <input
              type="text"
              placeholder="Search Everthing"
              className="px-4 py-2 text-sm outline-none rounded"
            />
          </span>
        </nav>
      </div>
      <hr className="text-textColor shadow"/>
    </div>
  );
};

export default Header;
