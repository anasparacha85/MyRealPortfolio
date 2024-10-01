import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footbar bg-black text-white h-1/2  lg:w-full sm:w-[500px] ">
      <div className="h33 text-center text-whitesmoke py-6 ">
        <h3 className="underline lg:text-sm sm:text-[9px]">My Home Address</h3>
        <h3 className='lg:text-sm sm:text-[9px]'>A-536 Block I North Nazimabad, Karachi</h3>
      </div>
      <div className="flex justify-between px-8">
        <span className="email font-bold lg:text-sm sm:text-[9px]">
          Email:{" "}
          <NavLink
            to="https://mail.google.com/mail/u/0/#all?compose=new"
            className={({ isActive }) =>
             { `${isActive ? 'underline text-indigo-400' : 'underline '} lg:text-sm sm:text-[9px]`}
            }
          >
            amiranas761@gmail.com
          </NavLink>
        </span>
        <span className="contact font-bold lg:text-sm sm:text-[9px]">
          Contact: <u>03212167055</u>
        </span>
      </div>
      <footer className="bg-red-700 h-20 mt-12 text-center text-white py-4 mb-6  lg:text-sm sm:text-[9px]">
        <p>
          &copy; Made by <b>Anas Paracha</b>
        </p>
        <p>
          Software Engineer <b>Anas Paracha</b>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
