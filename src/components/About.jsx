import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import aboutpic from '../../public/aboutpic.jpeg'
import mypicture from '../../public/mypicture.jpeg'

const About = () => {
  return (
    <>
    <Header/>
    <div className="flex justify-between h-[370px] w-[98vw] mt-[100px]">
      {/* Profile Info Section */}
      <div className="w-[47vw] h-screen">
        <div className="p-10">
          <div className="lg:text-3xl font-bold text-white sm:text-lg sm:w-[220px] lg:w-auto">
          Turning ideas into interactive experiences, one component at a time.!
          </div>
        </div>
       
      </div>

      {/* Profile Picture Section */}
      <div className="w-[47vw] h-screen relative">
       
        <div className="lg:h-[350px] lg:w-[500px] sm:w-[250px] sm:h-[155px]  rounded-full absolute top-[-80px]  left-[80px] flex items-center justify-center lg:mt-10 sm:mt-20  " >
          <img
            src={aboutpic}
            alt="Profile"
            className="lg:w-[500px] lg:h-[360px] sm:w-[250px] sm:h-[155px] rounded-[40%]  bord "
           
          />
        </div>
      </div>
    </div>
    <section
  id="about"
  className="flex flex-col lg:items-center lg:justify-center bg-gradient-to-b lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 lg:ml-auto sm:ml-[100px] lg:w-auto sm:w-[300px]"
>
  <div className="max-w-5xl w-full bg-gray-900 shadow-lg rounded-lg p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center">
    <div className="lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
      <img
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-300"
        src={mypicture}
        alt="Anas Paracha"
      />
    </div>
    <div className="lg:w-2/3 lg:pl-8 text-center lg:text-left">
      <h2 className="lg:text-3xl sm:text-lg md:text-xl font-bold text-gray-200 mb-4">
        Anas Paracha
      </h2>
      <p className="lg:text-base sm:text-[7px] md:text-[11px] text-gray-300 mb-4 sm:mb-6">
        Passionate React developer seeking opportunities to create amazing web
        applications. I’m driven by a love for coding, creativity, and building
        user-centric designs.
      </p>
      <p className="lg:text-sm sm:text-[7px] md:text-[11px] text-gray-200 mb-4 sm:mb-6">
        I focus on writing clean, efficient, and reusable code. I enjoy solving
        problems and creating intuitive, responsive, and engaging user
        interfaces. Currently, I’m looking for an internship or job
        opportunities to enhance my skills and contribute to real-world
        projects.
      </p>
      <div className="flex justify-center lg:justify-start space-x-4">
        <a
          href="https://www.linkedin.com/in/anas-amir-874876265/"
          className="text-gray-600 hover:text-blue-500"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://github.com/anasparacha85/"
          className="text-gray-600 hover:text-gray-900"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="mailto:amiranas761@gmail.com"
          className="text-gray-600 hover:text-red-500"
          aria-label="Email"
        >
          <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  </div>
</section>

    <Footer/>
    </>

  );
};

export default About;
