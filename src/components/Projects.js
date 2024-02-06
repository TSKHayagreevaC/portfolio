// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { CloudIcon } from "@heroicons/react/solid";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Worked
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap container p-5 mx-auto text-center m-4">
          {projects.map((project) => (
            // <a
            //   href={project.link}
            //   key={project.image}
            //   className="m-1"
            // >
            <div
              key={project.image}
              className="p-2 m-1 border-4 rounded-lg border-gray-800 bg-gray-900"
            >
              <div className="mb-2 flex flex-row align-center justify-between">
                <a className="w-full" href="/">
                 <CodeIcon className="max-w-5" />
                </a>
                <a className="w-full" href="/">
                <ExternalLinkIcon className="max-w-5" />
                </a>
              </div>
              <div className="relative">
                <img
                  alt="gallery"
                  className="relative inset-0 w-50 h-50 object-cover object-center"
                  href={project.image}
                  src={project.image}
                />
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p> */}
              </div>
            </div>
            // </a>
          ))}
        </div>
      </div>
    </section>
  );
}
