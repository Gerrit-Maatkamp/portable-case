"use client";

import React from "react";
import { LucidePhone, LucideMessageSquare, LucideCopy } from "lucide-react";

type PhoneLinkProps = {
  phoneNumber: string;
  formattedNumber?: string;
  className?: string;
  scrollThreshold?: number;
};

const PhoneLink: React.FC<PhoneLinkProps> = ({
  phoneNumber,
  formattedNumber,
  className = "",
}) => {
  // Format phone number for href (remove non-numeric characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "");

  // Use the provided formatted number or create a default one
  const displayNumber = formattedNumber || phoneNumber;

  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
  };

  return (
    <div
      className={`flex flex-col items-center bg-slate-200 p-3 rounded-md ${className}`}
    >
      <div className="flex gap-2 mb-2 w-full justify-center">
        {/* Call button */}
        <a
          href={`tel:+1${formattedPhone}`}
          className="flex items-center justify-center p-3 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          aria-label={`Call ${phoneNumber}`}
        >
          <LucidePhone size={20} className="text-slate-200" />
        </a>

        {/* Text/SMS button */}
        <a
          href={`sms:+1${formattedPhone}`}
          className="flex items-center justify-center p-3 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          aria-label={`Text ${phoneNumber}`}
        >
          <LucideMessageSquare size={20} className="text-slate-200" />
        </a>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex items-center justify-center p-3 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          aria-label={`Copy ${phoneNumber}`}
        >
          <LucideCopy size={20} className="text-slate-200" />
        </button>
      </div>

      <p className="text-slate-800 font-medium transition-opacity duration-300">
        {displayNumber}
      </p>
    </div>
  );
};

export default PhoneLink;
