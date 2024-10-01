import React , { useRef, useState } from 'react';
import { NavLink ,Link} from 'react-router-dom';





const Head = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  
  

  return (
    <div className="relative">
      <nav className='flex items-center justify-between h-16 px-4 md:px-8 text-white sm:w-[500px] lg:w-auto'>
        {/* Logo */}
        <div className="flex items-center">
        <div className="bg-red-600 text-white h-12 w-12 rounded-full flex justify-center items-center shadow-xl"style={{boxShadow:'7px 4px 4px rgb(154, 44, 44)'}}>
          <span className="text-lg font-bold pl-2 ">Anas Paracha</span>
        </div>
      </div>
       
        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:items-center md:gap-5 md:static absolute top-16 left-0 w-full bg-red-950 md:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 justify-end`}>
          <li><NavLink to="/" className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-gray-400" : "text-white"} hover:text-gray-400 transition-all`}>Home</NavLink></li>
          <li><NavLink to="/About" className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-gray-400" : "text-white"} hover:text-gray-400 transition-all`}>About</NavLink></li>
          <li><NavLink to="/Skills" className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-gray-400" : "text-white"} hover:text-gray-400 transition-all`}>Skills</NavLink></li>
          <li><NavLink to="/Projects" className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-gray-400" : "text-white"} hover:text-gray-400 transition-all`}>Project</NavLink></li>
        </ul>

        {/* Cart Button */}
      
      </nav>
    </div>
  );
};

export default Head;
