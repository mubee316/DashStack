import React from "react";
import { FaTrademark, FaPerson } from "react-icons/fa6";

const Page = () => {
  return (
   

     <>
      <div className="flex flex-col flex-grow">
        {/* Content Area */}
        <div className="flex-grow overflow-y-scroll p-4">
          <div className="grid grid-cols-4 gap-4">
            {/* Stat Cards */}
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-full h-[161px] rounded-md py-3 px-6 bg-white flex flex-col justify-between shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <h1>Total User</h1>
                    <span>40,689</span>
                  </div>
                  <div className="px-3 py-3 rounded-2xl text-purple-500 bg-purple-200 text-2xl">
                    <FaPerson />
                  </div>
                </div>
                <h1 className="flex items-center gap-2">
                  <FaTrademark className="text-green-500" />
                  <span className="text-green-500">8.5%</span> Up from
                  yesterday
                </h1>
              </div>
            ))}
          </div>

          
          {/* <div className="w-full h-[444px] border border-black mt-10 p-4">
            <h1>Sales Details</h1>
          </div> */}
        </div>
      </div>
    
    </>
  );
};

export default Page;
