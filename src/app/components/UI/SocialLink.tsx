"use client";

import React from "react";
import { LucideLinkedin, LucideGithub } from "lucide-react";

type SocialItem = {
  platform: "linkedin" | "github";
  username: string;
  ariaLabel?: string;
};

type SocialLinksProps = {
  socials: SocialItem[];
  className?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => {
  const getUrlAndIcon = (social: SocialItem) => {
    switch (social.platform.toLowerCase()) {
      case "linkedin":
        return {
          url: `https://www.linkedin.com/in/${social.username}`,
          icon: <LucideLinkedin size={20} className="text-slate-200" />,
          ariaLabel:
            social.ariaLabel || `Visit LinkedIn profile: ${social.username}`,
        };
      case "github":
        return {
          url: `https://github.com/${social.username}`,
          icon: <LucideGithub size={20} className="text-slate-200" />,
          ariaLabel:
            social.ariaLabel || `Visit GitHub profile: ${social.username}`,
        };
      default:
        return {
          url: "#",
          icon: null,
          ariaLabel: social.ariaLabel || `Visit profile: ${social.username}`,
        };
    }
  };

  return (
    <div className="flex flex-col gap-2 w-auto items-center bg-slate-200 p-3 rounded-md ${className}`">
      <div className={`flex gap-2`}>
        {socials.map((social, index) => {
          const { url, icon, ariaLabel } = getUrlAndIcon(social);

          return (
            <a
              key={`${social.platform}-${index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
              aria-label={ariaLabel}
            >
              {icon}
            </a>
          );
        })}
      </div>
      <p className="text-slate-800 font-medium transition-opacity duration-300">
        Links
      </p>
    </div>
  );
};

export default SocialLinks;
