import React from "react";
import {Link, NavLink } from "react-router-dom";
import mypicture from '../../public/mypicture.jpeg'
import fb3 from '../../public/fb3.jpg'
import inst2 from '../../public/inst2.jpg'
import lin from '../../public/lin.png'
import Header from "./Header";
import Footer from "./Footer";


const Main = () => {
  return (
    <>
    <Header/>
     <div className="flex justify-between h-[470px] w-[98vw] mt-[100px]">
      {/* Profile Info Section */}
      <div className="w-[47vw] h-screen">
        
        <div className="p-10">
          <div className="text-3xl font-bold text-white">
            Hi, I'm{" "}
            <span className="font-cursive font-bold" id="bold">
              Anas Paracha
            </span>{" "}
            and I'm A{" "}
            <span className="text-red-600 text-4xl" id="element">
Front-End React Developer
            </span>
          </div>
        </div>
        <div className="text-xs text-white font-sans pl-10">
          <p>
            A boy who is currently doing a Bachelor of Software Engineering from
            Sir Syed University of Engineering and Technology, wants to succeed
            as an expert developer.
          </p>
          <br />
          <p>Find me on:</p>
          <br />
          <div className="flex space-x-4">
           <Link to="https://www.facebook.com/anas.amir.7311352/"> <img id="img1" src={fb3 }alt="Facebook" className="w-5 hover:mix-blend-hard-light"    /></Link>  
       
           <Link to="https://www.instagram.com/anasparacha223/">  <img id="img2" src={inst2} alt="Instagram" className="w-5 hover:mix-blend-color-dodge" /> </Link>
           <Link to="https://www.linkedin.com/in/anas-amir-874876265/"> <img id="img3" src={lin} alt="LinkedIn" className="w-5 hover:mix-blend-color-dodge" /></Link>
          </div>
        </div>
        <section className="pl-8 mt-5 text-white text-sm">
          <button className="bg-red-600 text-white py-2 px-5 rounded-lg mr-5">
          <a
        href="/Resume.pdf" // Path to the PDF in the public folder
        download="Anas_Paracha_Resume.pdf" // File name when downloaded
        className=" text-white font-bold g transition duration-300 ease-in-out"
      >
        Download My Resume
      </a>
           
          </button>
        
        </section>
      </div>

      {/* Profile Picture Section */}
     
      <div className="w-[47vw] h-screen relative">
     
        <div className="h-32 w-32 bg-red-700 rounded-full  ml-[400px] -mt-[90px]  left-[300px]"></div>
        <div className="h-[350px] w-[350px] bg-red-600 rounded-full absolute -top-[20px] left-[170px] flex items-center justify-center">
          <img
            src={mypicture}
            alt="Profile"
            className="w-[320px] h-[360px] rounded-[40%] mix-blend-multiply  rounded-full"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default Main;
