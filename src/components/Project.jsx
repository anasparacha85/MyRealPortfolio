import React from 'react';
import ProjectCard from './ProjectCard';
import Header from './Header';
import Footer from './Footer';
import projectsss from '../../public/projectsss.jpg'


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
  }
  // Add more projects as needed
];

const Project = () => {
  return (
    <>
    <Header/>
      <div className="flex justify-between h-[370px] w-[98vw] mt-[100px]">
      {/* Profile Info Section */}
      <div className="w-[47vw] h-screen">
        <div className="p-10">
          <div className="text-3xl font-bold text-red-600 font-serif ml-16 mt-10">
          Have A Look At my Front End Projects!
          </div>
        </div>
       
      </div>

      {/* Profile Picture Section */}
      <div className="w-[47vw] h-screen relative">
       
        <div className="h-[350px] w-[500px]  rounded-full absolute top-[-80px] left-[80px] flex items-center justify-center mt-10 " style={{borderRadius:'99% 1% 78% 22% / 91% 54% 46% 9%'}}>
          <img
            src={projectsss}
            alt="Profile"
            className="w-[500px] h-[360px] rounded-[40%]  "
            style={{borderRadius:' 0% 100% 13% 87% / 87% 45% 55% 13%'}}
          />
        </div>
      </div>
    </div>
    <section id="projects" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
