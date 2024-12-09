import React from "react";
import { FaBox, FaClock, FaHeart } from "react-icons/fa";
import {  FaMessage } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="min-w-[12rem]  min-h-full bg-white shadow-2xl  overflow-y-scroll scrollbar border border-red-500 h-screen fixed top-0 left-0">
        <div className="font-bold text-xl flex items-center justify-center p-2 m-auto">
            
            <h1><span style={{color:'#4880FF'}}>Dash</span>Stack</h1>
            </div>

      <div className="flex flex-col p-5 gap-1 ">
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-700 rounded-md">
          <FaClock />
          Dashboard
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
          <FaBox />
          Products
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <FaHeart />
          Favorites
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <FaMessage/>
          Inbox
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <FaHeart />
          Favorites
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <FaHeart />
          Favorites
        </button>
       
      </div>

      <div className="border-t mt-10"></div>

      <div className="flex flex-col p-4 gap-6">
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-700 rounded-md">
          <FaClock />
          Dashboard
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
          <FaBox />
          Products
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <FaHeart />
          Favorites
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <FaMessage/>
          Inbox
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <FaHeart />
          Favorites
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <FaHeart />
          Favorites
        </button>
       
      </div>
    </div>
  );
};

export default SideBar;
