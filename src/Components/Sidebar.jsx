import React from "react";
import { useState } from "react";
import SidebarOption from "./SidebarOption";
import {
  AiFillAppstore,
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineMail,
} from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";

const Sidebar = () => {

  return (
    <div className="">
      <div className="bg-white h-screen p-4">
        <div className="p-5">
          {/* Logo */}
          <div className="flex justify-center">
            <h1 className="text-primary text-2xl">Dashboard</h1>
          </div>
          {/* Links */}
          <div className="ml-4 justify-center">
            <SidebarOption
              Icon={<AiFillAppstore size={20} />}
              text="Dashboard"
            />
            <SidebarOption
              Icon={<HiOutlineInbox size={20} />}
              text="Companies"
            />
            <SidebarOption Icon={<AiOutlineMail size={20} />} text="Messages" />
            <SidebarOption Icon={<AiOutlineTeam size={20} />} text="Teams" />
            <SidebarOption Icon={<BsChatLeftDots size={20} />} text="Chat" />
            <SidebarOption
              Icon={<AiOutlineSetting size={20} />}
              text="Setting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
