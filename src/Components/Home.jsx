import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
          <Nav />
      </div>
    </div>
  );
};

export default Home;
