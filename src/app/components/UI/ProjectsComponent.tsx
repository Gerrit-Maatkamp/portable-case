"use client";

import React, { useState } from "react";
import Project from "./ProjectComponent";
import CompanyComponent from "./CompanyComponent";
import projects from "../../../assets/data/projects.json";

import { ProjectItem } from "@/lib/types";
import ProjectModal from "../../../components/ui/DialogComponent";

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
            <div className="flex flex-wrap gap-4 p-4 justify-center">
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

      {/* ShadCN Dialog component */}
      <ProjectModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={handleOpenChange}
      />
    </div>
  );
};

export default ProjectsComponent;
