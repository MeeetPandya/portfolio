import React from 'react'

export default function Skills() {
    const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "ShadCN UI"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps/Cloud",
      skills: ["Docker", "GitHub Actions", "Vercel", "AWS (EC2, S3, SQS)"],
    },
    {
      title: "Testing",
      skills: ["React Testing Library", "Postman"],
    },
    {
      title: "Tools",
      skills: ["Git", "SQL", "OAuth", "JWT"],
    },
  ]    
 
  return (
    <div className="mb-16 scroll-mt-16 md:mb-20 lg:mb-30 lg:scroll-mt-24" >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Skills
            </h2>
        </div>
        <div className="z-10 sm:col-span-6">
            {skillCategories.map((category,index) => (
                <div key={index} className='space-y-0.5'>
                    <h3 className='text-slate-500 text-xs font-semibold capitalize tracking-widest'>{category.title}:</h3>
                    <ul className="mb-2 flex flex-wrap" aria-label="Skills">  
                    {category.skills.map((skill,skillIndex) => (
                        <li key={skillIndex} className="mr-1.5 mb-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            {skill}
                            </div>
                        </li> 
                    ))}                              
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}