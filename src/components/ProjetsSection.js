import React from 'react';
// Importez les icônes nécessaires de React Icons si besoin
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importez FaExternalLinkAlt pour l'icône du lien externe

const projects = [
  {
    id: 1,
    title: 'Site Événementiel Association',
    description: 'Développement dun site web événementiel pour une association en utilisant MySQL, PHP et JavaScript.',
    stack: ['MySQL', 'PHP', 'JavaScript'],
    githubLink: 'https://github.com/ZerIlyes/Sae-Evenement_Maths',    
    // image: 'path-to-image',
  },
  {
    id: 2,
    title: 'Site Web Fans de Comics',
    description: 'Création d\'un site web dédié aux fans de comics, avec un backend en PHP et MySQL, et interactivité en JavaScript.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
    githubLink: 'https://github.com/ZerIlyes/marvel-fans-site',
    siteLink: 'https://comicsfans.fr',
    // image: 'path-to-image',
  },
  
  {
    id: 3,
    title: 'Exploration des Performances Redis vs MongoDB',
    description: 'Étude comparative des performances entre Redis et MongoDB pour le traitement de données volumineuses.',
    stack: ['Redis', 'MongoDB', 'Python'],
    githubLink: 'https://github.com/ZerIlyes/redis-mongodb-performance',
    siteLink: 'https://zerilyes.github.io/ExplorationBDD/ExplorationBDD.html',
    // image: 'path-to-image',
  }
  ,
  // ... autres projets
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="text-gray-600 text-sm space-x-2 mb-4">
        {project.stack.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        {/* GitHub Link */}
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
          <FaGithub size={30} />
        </a>
        {/* Project Site Link */}
        {project.siteLink && (
          <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            <FaExternalLinkAlt size={30} />
          </a>
        )}
      </div>
    </div>
  );
};
 

const ProjectsSection = () => {
  return (
    <section id="projets" className="container mx-auto p-1">
      <h2 className="text-3xl font-bold text-center">Projets</h2>
      <div className="flex flex-wrap -m-4 mt-6 justify-center">
        {projects.map((project) => (
          <div className="w-full sm:w-1/2 md:w-1/3 p-4" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

