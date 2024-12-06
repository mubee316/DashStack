import React from "react";
import { FaBars,  FaCartArrowDown,  FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="border bg-white h-[70px] w-100%  z-0 px-4 py-3">
        <div className="flex items-center  justify-between gap-6 m-auto ">
          <div className="flex items-center gap-4">
        <div className="flex  items-center justify-between  gap-6">
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
          </div>
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
