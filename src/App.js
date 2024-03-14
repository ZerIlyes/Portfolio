// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjetsSection';
import Skills from './components/Skills';
function App() {
    return (
            <div>
                <Navbar/>
                <HeroSection/>
                <ProjectsSection/>
                <Skills/>
                
            </div>
    );
}

export default App;
