import React from "react";
import {Link, NavLink } from "react-router-dom";
import mypicture from '../../public/mypicture.jpeg'
import fb3 from '../../public/fb3.jpg'
import inst2 from '../../public/inst2.jpg'
import lin from '../../public/lin.png'
import Header from "./Header";
import Footer from "./Footer";
import Typed from 'typed.js';
import Head from "./Head";
import Foot from "./Foot";


const Main = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Front End React Developer','Basic Nodejs Developer ','Basic Express js developer','WordPress Developer','Javascript Expert','Java programming expert','Microsoft Office Exxpert','DataBase Management (SQL,MySQL,MongoDB)','Front End React Developer'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
    <Head/>
     <div className="flex justify-between h-[470px] w-[98vw] mt-[100px]">
      {/* Profile Info Section */}
      <div className="lg:w-[47vw] sm:w-[200px]  h-screen">
        
        <div className="p-10">
          <div className="lg:text-3xl font-bold text-white sm:text-lg sm:w-[200px] lg:w-auto lg:h-[150px] sm:h-[80px]">
            Hi, I'm{" "}
            <span className="font-cursive font-bold" id="bold">
              Anas Paracha
            </span>{" "}
            and I'm A{" "}
            <span ref={el} className="text-red-600 lg:text-4xl sm:text-xl" id="element">

            </span>
          </div>
        </div>
        <div className="lg:text-xs text-white font-sans pl-10 sm:text-[7px]  ">
          <p>
            A boy who is currently doing a Bachelor of Software Engineering from
            Sir Syed University of Engineering and Technology, wants to succeed
            as an expert developer.
          </p>
          <br />
          <p>Find me on:</p>
          <br />
          <div className="flex space-x-4">
           <Link to="https://www.facebook.com/anas.amir.7311352/"> <img id="img1" src={fb3 }alt="Facebook" className="lg:w-5 sm:w-3 hover:mix-blend-hard-light"    /></Link>  
       
           <Link to="https://www.instagram.com/anasparacha223/">  <img id="img2" src={inst2} alt="Instagram" className="lg:w-5 sm:w-3 hover:mix-blend-hard-light" /> </Link>
           <Link to="https://www.linkedin.com/in/anas-amir-874876265/"> <img id="img3" src={lin} alt="LinkedIn" className="lg:w-5 sm:w-3 hover:mix-blend-hard-light" /></Link>
          </div>
        </div>
        <section className="pl-8 mt-5 text-white text-sm">
          <button className="bg-red-600 text-white lg:py-2 lg:px-5 sm:py-1 sm:px-3 rounded-lg mr-5">
          <a
        href="/Resume.pdf" // Path to the PDF in the public folder
        download="Anas_Paracha_Resume.pdf" // File name when downloaded
        className=" text-white font-bold g transition duration-300 ease-in-out lg:text-sm sm:text-[9px]"
      >
        Download My Resume
      </a>
           
          </button>
        
        </section>
      </div>

      {/* Profile Picture Section */}
     
      <div className="lg:w-[47vw]  h-screen relative ">
     
        <div className="lg:h-32 lg:w-32 sm:h-16 sm:w-16 bg-red-700 rounded-full  lg:ml-[400px] lg:-mt-[90px] sm:-mt-[53px]  sm:ml-[180px] lg:left-[300px]"></div>
        <div className="lg:h-[350px] lg:w-[350px] sm:w-[230px] sm:h-[230px] bg-red-600 rounded-full absolute -top-[20px] sm:left-[60px] lg:left-[170px] flex items-center justify-center">
          <img
            src={mypicture}
            alt="Profile"
            className="lg:w-[320px] lg:h-[360px] sm:w-[210px] sm:h-[230px]  mix-blend-multiply  rounded-full"
          />
        </div>
      </div>
    </div>
    <div className="sm:mt-[280px] lg:mt-auto">
    <Footer/>
    </div>
   
    </>
   
  );
};

export default Main;
