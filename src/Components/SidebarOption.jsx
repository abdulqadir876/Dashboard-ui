import React from "react";

const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="flex items-center border-l-4 border-white gap-4 mt-5 text-textColor cursor-pointer px-3 py-2 hover:bg-gray rounded group hover:border-l-4 hover:border-primary">
      <div className="group-hover:text-primary">{Icon}</div>
      <h2 className="text-md group-hover:text-primary">{text}</h2>
    </div>
  );
};

export default SidebarOption;
