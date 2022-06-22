import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  
  return (
    <div className="w-[100%] bg-primary">
      <div className="flex  justify-between border-b-2 py-4 border-textColor w-[90%] mx-auto">
        <h1 className="text-2xl text-secondry">Dashboard</h1>
        <div className="flex">
          <IoMdNotificationsOutline />
          search
        </div>
      </div>

      {/* Overview */}
    </div>
  );
};

export default Header;
