// components/ProjectsSection.jsx
import { projects } from "../../data/projects";
import ProjectCard from "../projectCard";

export default function Projects() {
  return (
    <div>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-2">
                Projects
            </h2>
        </div> 
        
        <ul className="group/list">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
        </ul>

      <div className="mt-12">
        <a
          href="https://github.com/MeeetPandya"
          className="inline-flex items-center font-medium leading-tight text-slate-200 group"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
            View Full Project Archive on Github
          </span>
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
