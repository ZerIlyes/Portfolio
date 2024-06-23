// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjetsSection';
import Skills from './components/Skills';
import Conclusion from "./components/Conclusion";
import Intro from "./components/Intro";
function App() {
    return (
            <div>
                <Navbar/>
                <HeroSection/>
                <Intro/>
                <ProjectsSection/>
                <Skills/>
                <Conclusion/>
                
            </div>
    );
}

export default App;
