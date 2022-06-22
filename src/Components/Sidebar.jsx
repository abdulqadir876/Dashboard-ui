import React from "react";
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
    <div className="w-56 h-screen bg-white p-5">
      <div className="ml-8 mt-5 text-2xl text-primary">
        <h1>Dashboard</h1>
      </div>
      <div className="ml-4 mt-5 justify-center">
        <SidebarOption Icon={<AiFillAppstore size={20} />} text="Dashboard" />
        <SidebarOption Icon={<HiOutlineInbox size={20} />} text="Companies" />
        <SidebarOption Icon={<AiOutlineMail size={20} />} text="Messages" />
        <SidebarOption Icon={<AiOutlineTeam size={20} />} text="Teams" />
        <SidebarOption Icon={<BsChatLeftDots size={20} />} text="Chat" />
        <SidebarOption Icon={<AiOutlineSetting size={20} />} text="Setting" />
      </div>
    </div>
  );
};

export default Sidebar;
