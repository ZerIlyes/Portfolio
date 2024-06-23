import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const HeroSection = () => {
  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/assets/CV_Ilyes_Zeroual.pdf'; // Ajustez le chemin vers votre CV
    link.download = 'CV_Ilyes_Zeroual.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center items-center text-center" style={{ marginTop: '50px', marginBottom: '100px',marginLeft:'200px' }}>
      {/* Colonne de texte à gauche */}
      <div className="flex-1">
        <motion.h1
          className="text-5xl font-bold text-gray-800"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Salut, je suis Zeroual Ilyes
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-700 mt-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Un Développeur Fullstack
        </motion.p>
        <motion.p
          className="text-md text-gray-500 mt-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Créateur de solutions innovantes, un code à la fois
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        >
          <a
            href="#projets"
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300"
          >
            Voir mes projets
          </a>
        </motion.div>
        <div className="flex justify-center mt-6">
          <a href="https://www.linkedin.com/in/ilyes-zeroual/" className="text-gray-800 hover:text-blue-600 text-3xl mx-2">
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href="https://github.com/ZerIlyes" className="text-gray-800 hover:text-black text-3xl mx-2">
            <FaGithub aria-hidden="true" />
          </a>
        </div>
        <motion.button
          onClick={handleDownloadCv}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <FaDownload />
          <span className="ml-2">Télécharger Mon CV</span>
        </motion.button>
      </div>
      {/* Colonne d'image à droite avec réduction de taille */}
      <motion.div className="flex-1"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <img src={process.env.PUBLIC_URL + '/image.svg'}   alt=""
             style={{ maxWidth: '50%', height: 'auto' }} />
      </motion.div>
    </div>
  );
};

export default HeroSection;







  