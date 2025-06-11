"use client";

import { useState} from 'react'

import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Intro from "@/components/sections/intro";
import Navigation from "@/components/sections/navigation";
import Skills from "@/components/sections/skills";
import Socials from '@/components/sections/socials';
import Projects from '@/components/sections/projects';

export default function Home() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div id="__next">
        <div className="min-h-screen group/spotlight relative" onMouseMove={handleMouseMove}>
          <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
          }}>

          </div>
     
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <Intro/>
                        <Navigation />
                    </div>
                    <Socials />
                </header>

                <main id='content' className="pt-24 lg:w-[52%] lg:py-24">

                  <section id="about"aria-label="About me">
                    <About/>
                  </section>
                  
                  <section id="education"  aria-label="Education">
                    <Education />
                  </section>

                  <section id="skills" aria-label="skills">
                    <Skills/>
                  </section>

                  <section id="projects" className="mb-16 scroll-mt-16 md:mb-20 lg:mb-30 lg:scroll-mt-24" aria-label="Projects">
                     
                    <Projects />
                  </section>

                  <footer className="flex items-center">
                    Made with 
                    <span className="mr-1 ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart w-4 h-4" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                      </svg>
                    </span>  by Meet Pandya. 
                  </footer>
                  
                </main>
            </div>
          </div>   
          
        </div>
      </div>
    </div>
  );
}
