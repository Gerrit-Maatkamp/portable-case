"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { Button } from "@/components/ui/Button";

import ImageStepper from "./ImageStepper";
import { ProjectItem } from "@/lib/types";
import { X } from "lucide-react";
// import { Figma, Globe, X } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  open,
  onOpenChange,
}) => {
  // const openUrl = useCallback((url: string | undefined) => {
  //   if (typeof window !== "undefined" && url) {
  //     window.open(url, "_blank");
  //   }
  // }, []);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] p-0 overflow-hidden border border-border bg-background dark:bg-background">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-20">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-[200%] animate-[moveGradient_30s_infinite] bg-[radial-gradient(circle,rgba(239,189,64,1),rgba(239,189,64,0))] dark:bg-[radial-gradient(circle,rgba(189,147,249,1),rgba(189,147,249,0))]"></div>
          <DialogHeader className="relative z-10 bg-black/50 dark:bg-black/70 p-6">
            <DialogTitle className="text-3xl text-white md:text-base text-center">
              {project.name}
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto md:p-4 md:pt-0 text-foreground dark:text-foreground">
          <p className="px-6">{project.summary}</p>

          {project.steps?.map((step, index) => (
            <div key={index} className="mt-0 p-6 md:block">
              <h3>{step.heading}</h3>
              <div className="flex flex-col gap-10 md:block">
                {index % 2 === 0 ? (
                  <>
                    <div className="rounded-md overflow-hidden flex items-center lg:mt-4 mb-5">
                      <ImageStepper images={step.images} />
                    </div>
                    <div>
                      <p>{step.paragraph}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p>{step.paragraph}</p>
                    </div>
                    <div className="rounded-md overflow-hidden flex items-center lg:mt-4">
                      <ImageStepper images={step.images} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* <div className="px-6">
            <h3>{project.prototypeHeader}</h3>
            <p>{project.prototypeText}</p>
            <div className="flex flex-col sm:flex-row justify-center w-full gap-6">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-4 h-20 mt-8 px-6 
                font-['HelveticaNeueCondensedBlack','HelveticaNeue',Helvetica,sans-serif] text-xl
                transition-all duration-300 ease-in-out 
                bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30
                text-primary-foreground dark:text-primary-foreground
                border border-primary/20 dark:border-primary/30"
                onClick={() => openUrl(project.prototype)}
              >
                <Figma size={24} />
                <span className="flex gap-2 justify-start">
                  Check Out the {project.name} Prototype
                </span>
              </Button>

              {project.url && (
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-4 h-20 mt-8 px-6
                  font-['HelveticaNeueCondensedBlack','HelveticaNeue',Helvetica,sans-serif] text-xl
                  transition-all duration-300 ease-in-out 
                  bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30
                  text-primary-foreground dark:text-primary-foreground
                  border border-primary/20 dark:border-primary/30"
                  onClick={() => openUrl(project.url)}
                >
                  <Globe size={24} />
                  <span className="flex gap-2 justify-start">
                    {project.name}
                  </span>
                </Button>
              )}
            </div>
          </div> */}
          <div className="h-16"></div>
        </div>

        <div className="px-6 pb-4 text-center text-sm text-muted-foreground dark:text-muted-foreground italic">
          Press ESC or click outside to close
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
