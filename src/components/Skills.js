import React from 'react';
import './Skills.css';
// Vous pouvez utiliser des bibliothèques comme 'framer-motion' pour des animations plus complexes

const Skills = () => {
    // Liste de compétences
    const skills = [
      'HTML', 'CSS', 'JavaScript', 'TypeScript',
      'React','Git','Docker','PHP','MySql','Python'
    ];
  
    return (
      <section id="skills" className="skills-section">
        <h2 className="skills-title">Compétences </h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  