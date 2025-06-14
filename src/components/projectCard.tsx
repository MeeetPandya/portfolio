import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  title: string;
  url: string;
  description: string;
  image: string;
  githubUrl?: string;
  githubStars?: number | null;
  marketplaceUrl?: string;
  marketplaceLabel?: string;
  technologies?: string[];
};

export default function ProjectCard({
  title,
  url,
  description,
  image,
  githubUrl,
  githubStars,
  marketplaceUrl,
  marketplaceLabel,
  technologies = [],
}: ProjectCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}
                <span className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>

          {githubUrl && githubStars && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300"
            >
              ⭐ {githubStars}
            </a>
          )}

          {technologies.length > 0 && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {technologies.map((tech, i) => (
                <li key={i} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {marketplaceUrl && marketplaceLabel && (
            <a
              href={marketplaceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300"
            >
              🛒 {marketplaceLabel}
            </a>
          )}
        </div>

        <Image
          src={image}
          alt={title}
          className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          width={320}
          height={180}
        />
      </div>
    </li>
  );
}
