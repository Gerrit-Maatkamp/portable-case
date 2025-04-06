import React from "react";
import { Globe, Linkedin } from "lucide-react";

interface CompanyProps {
  name: string;
  description?: string;
  linkedin?: string;
  website?: string;
}

const CompanyComponent: React.FC<CompanyProps> = ({
  name,
  description,
  linkedin,
  website,
}) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-baseline">
        <h2 className="mb-1 font-semibold">{name}</h2>
        <div className="flex gap-2">
          {linkedin && (
            <a
              href={linkedin}
              className="p-2 rounded bg-slate-800 text-white hover:bg-slate-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} className="text-slate-200" />
            </a>
          )}
          {website && (
            <a
              href={website}
              className="p-2 rounded bg-slate-800 text-white hover:bg-slate-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={20} className="text-slate-200" />
            </a>
          )}
        </div>
      </div>
      <p className="mt-0">{description}</p>
    </div>
  );
};

export default CompanyComponent;
