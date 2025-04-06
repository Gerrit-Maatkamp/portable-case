"use client";

import React, { useState } from "react";
import Project from "../project/Project";
import Company from "../Company";
import projects from "./projects.json";

import { ProjectItem } from "@/lib/types";
import ProjectModal from "../dialog/Dialog";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for dialog open/close

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    // This handles both opening and closing the dialog
    setIsModalOpen(open);

    // If dialog is closing, we can clear the selected project after a delay
    if (!open) {
      setTimeout(() => {
        setSelectedProject(null);
      }, 300); // Small delay to allow animation to complete
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      {projects.map((project) => {
        return (
          <React.Fragment key={project.name}>
            <Company
              name={project.name}
              description={project.description}
              linkedin={project.linkedIn}
              website={project.url}
            />
            <div className="grid gap-4 p-4 grid-cols-4 justify-start lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {project.projects.map((p: ProjectItem) => {
                return (
                  <div
                    key={p.name}
                    onClick={() => handleProjectClick(p)}
                    className="max-w-[325px] bg-accent dark:bg-foreground rounded-md sm:w-full sm:max-w-full cursor-pointer"
                  >
                    <Project {...p} />
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}

      {/* ShadCN Dialog component */}
      <ProjectModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={handleOpenChange}
      />
    </div>
  );
};

export default Projects;
