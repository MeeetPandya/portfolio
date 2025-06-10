export default function Home() {
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Meet Pandya</h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Engineer</h2>
                        <p className="mt-4 max-w-xs leading-normal">Web and Mobile Developer</p>
                        <nav aria-label="In-page jump links" className="nav hidden lg:block">
                            <ul className="mt-16 w-max">
                                <li>
                                    <a className="group flex items-center py-3 active" href="#about">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                            About
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a className="group flex items-center py-3 active" href="#about">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                            About
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a className="group flex items-center py-3 active" href="#about">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                            About
                                        </span>
                                    </a>
                                </li>
                            </ul>                
                        </nav>
                    </div>
                    <ul aria-label="Social Media" className="ml-1 mt-8 flex items-center">
                        <li className="mr-5 shrink-0 text-xs">
                            <a className="block hover:texxt-slate-200" href="http://github.com/meeetpandya" target='_blank' rel='noreferrer noopener' aria-label="Github (Opens in new tab)" title="Github">
                                <span className="sr-only">Github</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                    </path>
                                </svg>
                            </a>                        
                        </li>

                        <li className="mr-5 shrink-0 text-xs">
                            <a className="block hover:texxt-slate-200" href="https://www.linkedin.com/in/pandyameeet/" target='_blank' rel='noreferrer noopener' aria-label="Linkedin (Opens in new tab)" title="Github">
                                <span className="sr-only">Linkedin</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-6 h-6" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                            </a> 
                        </li>
                    </ul>
                </header>

                <main id='content' className="pt-24 lg:w-[52%] lg:py-24">
                  <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                      About
                    </h2>
                    </div>
                    <div>
                      <p className="mb-4">
                        &ldquo; I&apos;m Meet Pandya, a recent graduate in Computer Science Engineering at ITM (SLS) Baroda University with a CGPA of 8.56. My focus lies in building scalable web applications and distributed systems using technologies like React, Next.js, Node.js, and Docker. I have a strong foundation in CS fundamentals, with hands-on experience in both frontend and backend development.&rdquo;
                      </p>
                      <p className="mb-4">
                        &ldquo; Outside academics, I&apos;m an active contributor to my university&apos;s tech community as a core member of Stackheads, where I&apos;ve hosted events and led sessions on topics like AGI and agentic AI. I&apos;ve participated in hackathons like ETHIndia 2024 and Arweave Hacker House 3 in Bangalore. I enjoy building things that combine theory with real-world utility and am always exploring better ways to write and ship code. &rdquo;
                      </p>
                    </div>
                  </section>
                  <section id="Education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
                    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                        Education
                      </h2>
                    </div>  
                    <p className="mb-4">
                      
                    </p>  
                  </section>
                </main>
            </div>
            </div>
      
    </div>
  );
}
