import React from 'react';

const ProjectCard = ({ title, description, techStack, liveLink, githubLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl card">
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-400 mb-2">{title}</div>
        <p className="text-gray-100 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 pb-4 flex justify-between">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
