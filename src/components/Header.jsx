import React from "react";
import { Link ,NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <div className="flex items-center">
        <div className="bg-red-600 text-white h-12 w-12 rounded-full flex justify-center items-center shadow-xl">
          <span className="text-lg font-bold pl-2">Anas Paracha</span>
        </div>
      </div>
      <ul className="flex items-center space-x-6 text-white font-bold text-sm">
        <li>
          <NavLink to="/" className={({isActive})=>`hover:bg-red-500 p-2 rounded ${isActive?"bg-red-500":"bg-none"}`}>Home</NavLink>
        </li>
        <li className="hover:bg-red-500 p-2 rounded">About</li>
        <li>
          <NavLink to="/Skills"className={({isActive})=>`hover:bg-red-500 p-2 rounded ${isActive?"bg-red-500":"bg-none"}`}>Skills</NavLink>
          </li>
        <li>
        <NavLink to="/Projects"className={({isActive})=>`hover:bg-red-500 p-2 rounded ${isActive?"bg-red-500":"bg-none"}`}>Project</NavLink>
        </li>
       
      </ul>
    </div>
  );
};

export default Header;