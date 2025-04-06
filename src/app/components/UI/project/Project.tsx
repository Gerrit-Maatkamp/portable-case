"use client";

import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/lib/types";

const Project: React.FC<ProjectItem> = (project) => {
  return (
    <div className="">
      <div className="max-w-full shadow-inner shadow-text-color/10 rounded-t-md bg-foreground p-6 bg-gradient-to-l from-foreground to-accent">
        <div className="relative w-full h-64">
          <Image
            src={`/${project.imageUrl}`} // Using public folder
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="p-4 pb-6 px-6">
        <h3>{project.name}</h3>
        <p className="mt-0">{project.summary}</p>
      </div>
    </div>
  );
};

export default Project;
