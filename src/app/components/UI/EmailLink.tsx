"use client";

import React from "react";
import { LucideMail, LucideCopy } from "lucide-react";

type EmailLinkProps = {
  email: string;
  displayEmail?: string;
  className?: string;
};

const EmailLink: React.FC<EmailLinkProps> = ({
  email,
  displayEmail,
  className = "",
}) => {
  // Use the provided display email or the actual email
  const displayValue = displayEmail || email;

  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div
      className={`flex flex-col items-center bg-slate-200 p-3 rounded-md ${className}`}
    >
      <div className="flex gap-2 mb-2 w-full justify-start">
        <a
          href={`mailto:${email}`}
          className="flex items-center justify-center p-3 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          aria-label={`Email ${email}`}
        >
          <LucideMail size={20} className="text-slate-200" />
        </a>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex items-center justify-center p-3 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          aria-label={`Copy ${email}`}
        >
          <LucideCopy size={20} className="text-slate-200" />
        </button>
      </div>

      {/* Email display */}
      <p className="text-slate-800 font-medium">{displayValue}</p>
    </div>
  );
};

export default EmailLink;
