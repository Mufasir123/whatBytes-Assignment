import Link from "next/link";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import Analysis from "../components/Analysis";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <div className=" text-black font-[family-name:var(--font-geist-sans)]">
      <nav className="border-b-2 p-2">
        <ul className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-2 ml-10">
            <li>
              <Link href="/">
                <img
                  src="/whatbytesLogo-cropped.svg"
                  alt="logo"
                  className="w-10 h-10"
                />
              </Link>
            </li>
            <p className="text-2xl font-semibold">WhatBytes</p>
          </div>
          <div className="flex items-center gap-4 mr-5 border-2 rounded-md p-1">
            <Stack  direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
            <p>Rahil Siddique</p>
          </div>
        </ul>
      </nav>
      <div className="flex">
        <SideBar />
        <div className="grid lg:grid-cols-10 gap-3 w-full">
          <div className="lg:col-span-6">
            <Main />
          </div>
          <div className="lg:col-span-4">
            <Analysis />
          </div>
        </div>
      </div>
    </div>
  );
}
