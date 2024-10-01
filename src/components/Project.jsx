import React from 'react';
import ProjectCard from './ProjectCard';
import Header from './Header';
import Footer from './Footer';
import projectsss from '../../public/projectsss.jpg'
import Head from "./Head";


const projectsData = [
 
  {
    title: 'The All In One Mini Sales Store',
    description: 'The All in One is an Online Store website which is built using react and tailwind css in which u can buy Cloths ,jwellery or electronics.',
    techStack: ['React', 'API', 'Tailwind CSS'],
    liveLink: 'https://all-in-one-gamma.vercel.app/', // Replace with actual link
    githubLink: 'https://github.com/anasparacha85/all-in-one-react', // Replace with actual GitHub repo
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://yourportfolio.com', // Replace with actual link
    githubLink: 'https://github.com/username/portfolio', // Replace with actual GitHub repo
  },
  {
    title: 'Creative Agency',
    description: 'A sample project which is named as Creative Agency is a modern bloodline agency "just a clone"',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://bloodline-iota.vercel.app/', // Replace with actual link
    githubLink: 'https://github.com/anasparacha85/all-in-one-react', // Replace with actual GitHub repo
  }
  // Add more projects as needed
];
//https://bloodline-iota.vercel.app/
const Project = () => {
  return (
    <>
    <Head/>
      <div className="flex justify-between h-[370px] w-[98vw] mt-[100px]">
      {/* Profile Info Section */}
      <div className="w-[47vw] h-screen">
        <div className="p-10">
          <div className="lg:text-3xl font-bold text-white sm:text-lg sm:w-[220px] lg:w-auto">
          Have A Look At my Front End Projects!
          </div>
        </div>
       
      </div>

      {/* Profile Picture Section */}
      <div className="w-[47vw] h-screen relative">
       
        <div className="lg:h-[350px] lg:w-[500px] sm:w-[250px] sm:h-[155px]  rounded-full absolute top-[-80px]  left-[80px] flex items-center justify-center lg:mt-10 sm:mt-20 " >
          <img
            src={projectsss}
            alt="Profile"
            className="lg:w-[500px] lg:h-[360px] sm:w-[250px] sm:h-[155px] rounded-[40%]  bord "
            style={{borderRadius:' 0% 100% 13% 87% / 87% 45% 55% 13%'}}
          />
        </div>
      </div>
    </div>
    <section id="projects" className="py-16 bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="lg:text-3xl sm:text-[36px] font-bold text-center text-red-600 mb-12 lg:mt-auto sm:-mt-5 lg:ml-auto sm:ml-20 ">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8  lg:ml-auto sm:ml-20 lg:w-auto sm:w-60">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Project;
