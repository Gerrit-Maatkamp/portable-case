"use client";

import React, { useState } from "react";
import Project from "./ProjectComponent";
import CompanyComponent from "./CompanyComponent";
import projects from "../../assets/data/projects.json";

import { ProjectItem } from "@/lib/types";
import ProjectModal from "./DialogComponent";

const ProjectsComponent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for dialog open/close

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    setIsModalOpen(open);

    if (!open) {
      setTimeout(() => {
        setSelectedProject(null);
      }, 300);
    }
  };

  return (
    <div className="max-w-[1425px] mx-auto">
      {projects.map((project) => {
        return (
          <React.Fragment key={project.name}>
            <CompanyComponent
              name={project.name}
              description={project.description}
              linkedin={project.linkedIn}
              website={project.url}
            />
            <div className="flex flex-wrap gap-4 p-4 justify-start">
              {project.projects.map((p: ProjectItem) => {
                return (
                  <div
                    key={p.name}
                    onClick={() => handleProjectClick(p)}
                    className="max-w-lg lg:max-w-md bg-accent dark:bg-slate-600 rounded-md cursor-pointer"
                  >
                    <Project {...p} />
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}

      <ProjectModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={handleOpenChange}
      />
    </div>
  );
};

export default ProjectsComponent;
