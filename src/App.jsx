import React from 'react';
import { useWebAudio } from './hooks/useWebAudio';

import { Navbar } from './components/Navbar/Navbar';
import { ElevatorHero } from './components/ElevatorHero/ElevatorHero';
import { ToastSection } from './components/ToastSection/ToastSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { AboutFounder } from './components/AboutFounder/AboutFounder';
import { FloatingCallButton } from './components/FloatingCallButton/FloatingCallButton';
import { Footer } from './components/Footer/Footer';

export default function App() {
  const { soundEnabled, toggleSound, playElevatorChime, playCocktailClink } = useWebAudio();

  return (
    <div className="app-root">
      {/* Floating Brand Logo in Top Right */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Main Content */}
      <main>
        {/* 1. Penthouse Elevator Hero Scroll Section */}
        <ElevatorHero
          playElevatorChime={playElevatorChime}
        />

        {/* 2. Toast Animation Milestone Section */}
        <ToastSection
          playCocktailClink={playCocktailClink}
        />

        {/* 3. Real Production Projects Showcase */}
        <ProjectsSection />

        {/* 4. The Founder: Gourav Raut */}
        <AboutFounder />
      </main>

      {/* Floating Cal.com Booking Action */}
      <FloatingCallButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
