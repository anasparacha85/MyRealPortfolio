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
          <div className="text-3xl font-bold text-white font-serif ml-16 mt-10">
          Have A Look At my web development Skills!
          </div>
        </div>
       
      </div>

      {/* Profile Picture Section */}
      <div className="w-[47vw] h-screen relative">
       
        <div className="h-[350px] w-[500px]  rounded-full absolute top-[-80px] left-[80px] flex items-center justify-center mt-10 " style={{borderRadius:'99% 1% 78% 22% / 91% 54% 46% 9%'}}>
          <img
            src={skills}
            alt="Profile"
            className="w-[500px] h-[360px] rounded-[40%]  "
            style={{borderRadius:'99% 1% 78% 22% / 91% 54% 46% 9%'}}
          />
        </div>
      </div>
    </div>
    <section id="skills" className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(skillsData).map((category) => (
            <div key={category} className="bg-red-600 shadow-lg rounded-lg p-6 h border-black  border-[6px]  hover:border-red-800 transition duration-150 ease-in-out card ">
              <h3 className="text-xl font-semibold text-gray-200 mb-4 capitalize">{category}</h3>
              <ul className="space-y-2">
                {skillsData[category].map((skill, index) => (
                  <li key={index} className="text-gray-100 text-lg flex items-center">
                    <span className="mr-2 w-2.5 h-2.5 bg-red-900 rounded-full"></span>
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
