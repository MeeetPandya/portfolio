"use client";

import { useState} from 'react'

import About from "@/components/about";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Navigation from "@/components/navigation";
import Skills from "@/components/skills";
import Socials from '@/components/socials';

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
                    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                        Projects
                      </h2>
                    </div>  
                    <div>
                      <div className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present"> 
                        <h1>
                          May 2021 - May 2025
                        </h1>
                        <h2>
                          CGPA 8.56
                        </h2>
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://itmbu.ac.in/" target="_blank" rel="noreferrer noopener" aria-label="Bachelor of Technology (Computer Science and Engineering) (opens in a new tab)">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Bachelor of Technology (Computer Science & Engineering)
                            <span className=" inline-block">ITM (SLS) Baroda University
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                                </path>
                              </svg>
                            </span>
                            </span>
                            </a>
                          </div>
                        </h3>                                     
                      </div>
                      </div>
                      </div>                      
                    </div> 
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
