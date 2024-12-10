"use client"
import React from "react";

import { FaTrademark, FaPerson } from "react-icons/fa6";
import SalesDetails from "@/components/SalesDetails";
import DealsDetails from "@/components/DealsDetails";

const Page = () => {
  return (
   

     <>
      <div className="flex flex-col flex-grow mt-20">
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

          
          <div>
            <SalesDetails />
            <DealsDetails />
            <div className="bg-gradient-to-t from-black to-gray-300">
            <SalesDetails/>
            </div>
          </div>
          <div className=" flex  justify-between">
          <div className="w-[320px] h-[365px] bg-white shadow-md rounded-md mt-10">
            <h1 className="p-2">Customers</h1>
            <div className="flex flex-col gap-6">
              <div className="ring-8 max-w-48 py-20 px-20 rounded-full ring-blue-800 m-auto mt-6"></div>
              <div className="flex justify-between p-6 text-center">
                <div className="flex flex-col gap-6">
                  <span>34,249</span>
                  <h1>New Customers</h1>
                </div>
                <div className="flex flex-col gap-6">
                  <span>1420</span>
                  <h1>Repeated</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[320px] h-[365px] bg-white shadow-md rounded-md mt-10">
            <h1 className="p-2">Customers</h1>
            <div className="flex flex-col gap-6">
              <div className="ring-8 max-w-48 py-20 px-20 rounded-full ring-blue-800 m-auto mt-6"></div>
              <div className="flex justify-between p-6 text-center">
                <div className="flex flex-col gap-6">
                  <span>34,249</span>
                  <h1>New Customers</h1>
                </div>
                <div className="flex flex-col gap-6">
                  <span>1420</span>
                  <h1>Repeated</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[320px] h-[365px] bg-white shadow-md rounded-md mt-10">
            <h1 className="p-2">Customers</h1>
            <div className="flex flex-col gap-6">
              <div className="ring-8 max-w-48 py-20 px-20 rounded-full ring-blue-800 m-auto mt-6"></div>
              <div className="flex justify-between p-6 text-center">
                <div className="flex flex-col gap-6">
                  <span>34,249</span>
                  <h1>New Customers</h1>
                </div>
                <div className="flex flex-col gap-6">
                  <span>1420</span>
                  <h1>Repeated</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    </>
  );
};

export default Page;
