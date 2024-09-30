import React from 'react';
import './components.css'
import skills from '../../public/skills.jpg'
import Header from "./Header";
import Footer from "./Footer";

const skillsData = {
  frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  backend: ['Node.js Basic', 'Express Basic', 'MongoDB'],
  tools: ['Git', 'VSCode', 'Figma']
};

const Skills = () => {
  return (
    <>
    <Header/>
     <div className="flex justify-between h-[370px] w-[98vw] mt-[100px]">
      {/* Profile Info Section */}
      <div className="w-[47vw] h-screen">
        <div className="p-10">
          <div className="lg:text-3xl font-bold text-white sm:text-lg sm:w-[220px] lg:w-auto">
          Have A Look At my web development Skills!
          </div>
        </div>
       
      </div>

      {/* Profile Picture Section */}
      <div className="w-[47vw] h-screen relative">
       
        <div className="lg:h-[350px] lg:w-[500px] sm:w-[250px] sm:h-[155px]  rounded-full absolute top-[-80px]  left-[80px] flex items-center justify-center lg:mt-10 sm:mt-20 " >
          <img
            src={skills}
            alt="Profile"
            className="lg:w-[500px] lg:h-[360px] sm:w-[250px] sm:h-[155px] rounded-[40%]  bord"
           
          />
        </div>
      </div>
    </div>
    <section id="skills" className="lg:py-16 sm:py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
      
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 lg:ml-auto sm:ml-20 lg:w-auto sm:w-60">
          {Object.keys(skillsData).map((category) => (
            <div key={category} className="bg-red-600 shadow-lg rounded-lg p-6 h border-black  border-[6px]  hover:border-red-800 transition duration-150 ease-in-out card ">
              <h3 className="lg:text-xl sm:text-12 font-semibold text-gray-200 mb-4 capitalize">{category}</h3>
              <ul className="space-y-2">
                {skillsData[category].map((skill, index) => (
                  <li key={index} className="text-gray-100 lg:text-lg sm:text-[8px] flex items-center">
                    <span className="mr-2 lg:w-2.5 lg:h-2.5 sm:w-[6px] sm:h-[6px] bg-red-900 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Skills;
