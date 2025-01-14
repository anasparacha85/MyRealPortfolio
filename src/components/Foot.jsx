import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Foot = () => {
    return (
      <footer className="bg-gray-300 text-white py-6 lg:w-screen sm:w-screen  " >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-400 Font-Nerko lg-text-xl md:text-lg sm:text-lg">The All In One</h1>
            <nav className="mb-4 flex justify-between w-full">
              <ul >
                <li> <NavLink to='/' className={(isActive)=>`hover:text-gray-600 ${isActive?"text-gray-600":"text-gray-500"} lg-text-lg md:text-sm sm:text-sm`}>Home</NavLink></li>
                <li> <NavLink to='/About' className={(isActive)=>`hover:text-gray-600 ${isActive?"text-gray-600":"text-gray-500"} lg-text-lg md:text-sm sm:text-sm`}>About</NavLink></li>
               
              </ul>
            
            <div className="text-sm mb-4">
              <p className='text-gray-500 lg-text-lg md:text-sm sm:text-sm'>Email: <Link to="mailto:amiranas761@gmail.com" className="hover:underline text-gray-500">amiranas761@gmail.com</Link></p>
              <p className='text-gray-500 lg-text-lg md:text-sm sm:text-sm'>Phone:(+92321)2167055 </p>
            </div>
            </nav>
          </div>
          <div className="text-sm text-center">
            <p className='text-gray-500 lg-text-lg md:text-sm sm:text-sm'>&copy; {new Date().getFullYear()} All In One. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Foot;