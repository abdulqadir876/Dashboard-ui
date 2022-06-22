import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="flex bg-gray w-full h-screen">
      <Sidebar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
