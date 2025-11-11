import { useState } from 'react';
import Navigation from './components/Navigation';
import ProfileCard from './components/ProfileCard';
import ProjectsSection from './components/ProjectsSection';

function App() {
  const [activeNav, setActiveNav] = useState('PROJECTS');

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-zinc-900/20 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 opacity-30 pointer-events-none noise-texture" />

      <div className="relative z-10 min-h-screen w-full p-8 flex gap-6">
        <Navigation activeItem={activeNav} onItemClick={setActiveNav} />

        <div className="flex gap-6 flex-1">
          <ProfileCard />
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
