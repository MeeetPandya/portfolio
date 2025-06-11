import React from 'react'

export default function Skills() {
    const technologies = ["HTML 5", "CSS", "JavaScript", "React JS", "Next JS", "Express JS", "GIT", "C++"];
 
  return (
    <div className="mb-16 scroll-mt-16 md:mb-20 lg:mb-30 lg:scroll-mt-24" >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Skills
            </h2>
        </div>
        <div className="z-10 sm:col-span-6">
            <ul className="mt-2 flex flex-wrap" aria-label="Skills">  
                {technologies.map((tech,index) => (
                    <li key={index} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {tech}
                    </div>
                </li> 
                ))}                    
                
            </ul>
        </div>
    </div>
  )
}