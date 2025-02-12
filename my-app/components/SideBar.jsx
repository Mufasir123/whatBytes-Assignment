"use client";

import React, { useState } from "react";
import { FiBarChart2, FiMenu } from "react-icons/fi";
import { RiAwardFill } from "react-icons/ri";
import { GrDocument } from "react-icons/gr";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-20 text-2xl"
      >
        <FiMenu />
      </button>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative w-52 border-r-2 h-full font-bold text-slate-600 transition-transform duration-300 z-10 bg-white`}
      >
        <div className="p-3 flex flex-col gap-8 pt-14">
          <div className="flex items-center gap-3">
            <FiBarChart2 className="text-black" />
            <p>Dashboard</p>
          </div>
          <div className="-ml-4 pl-4 h-12 flex items-center gap-3 text-blue-500 bg-slate-100 rounded-r-full">
            <RiAwardFill />
            <p>Skill Test</p>
          </div>
          <div className="flex items-center gap-3">
            <GrDocument />
            <p>Internship</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
