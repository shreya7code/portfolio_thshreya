"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [page, setPage] = useState(0);

  const start = page * 3;
  const visibleProjects = projectsData.slice(start, start + 3);
  const canGoUp = page > 0;
  const canGoDown = start + 3 < projectsData.length;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      <div className="flex flex-col items-center gap-3">

        {/* Up arrow */}
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={!canGoUp}
          className="p-2 rounded-full border border-black/10 dark:border-white/10 text-gray-500 dark:text-white/50 hover:text-gray-950 dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition"
        >
          ▲
        </button>

        {/* Project cards */}
        <div className="w-full">
          {visibleProjects.map((project, index) => (
            <React.Fragment key={start + index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>

        {/* Down arrow */}
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={!canGoDown}
          className="p-2 rounded-full border border-black/10 dark:border-white/10 text-gray-500 dark:text-white/50 hover:text-gray-950 dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition"
        >
          ▼
        </button>

      </div>
    </section>
  );
}