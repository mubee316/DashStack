import React from "react";
import { FaBars,  FaCartArrowDown,  FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="border bg-white h-[70px] w-[1200px]">
        <div className="flex items-center  gap-6 m-auto py-3">
        <div className="flex  items-center justify-between p-4 gap-6">
          <FaBars />
          </div>

          <form className="flex items-center justify-between gap-4 bg-gray-200 p-2 rounded-md flex-1 max-w-lg">
            <input
              type="text"
              name="name"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none"
            />
            <button className="cursor-pointer">
              <FaSearch />
            </button>
          </form>
          <div>
            <div><FaCartArrowDown/></div>
            <div></div>
            <div></div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default NavBar;
