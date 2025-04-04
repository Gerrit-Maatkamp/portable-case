import React from "react";

type ContactLinkProps = {
  type: "phone" | "email";
  value: string;
  icon: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};
const ContactLink: React.FC<ContactLinkProps> = ({
  type,
  value,
  icon,
  className = "",
  children,
}) => {
  // Determine the appropriate href based on type
  const getHref = () => {
    switch (type.toLowerCase()) {
      case "phone":
        // Format phone number for href (remove non-numeric characters)
        const formattedPhone = value.replace(/\D/g, "");
        return `tel:+1${formattedPhone}`;
      case "email":
        return `mailto:${value}`;
      default:
        return "#";
    }
  };

  return (
    <a
      href={getHref()}
      className={`flex items-center gap-2 p-2 rounded-sm relative overflow-hidden 
        bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300 group ${className}`}
      aria-label={`Contact via ${type}: ${value}`}
    >
      {/* Icon */}
      {icon && <div className="flex-shrink-0">{icon}</div>}

      {/* Display value or custom children */}
      <span>{children || value}</span>

      {/* Shine effect element */}
      <div className="absolute top-0 left-0 w-12 h-full bg-white opacity-0 transform -skew-x-20 translate-x-[-150%] hover:animate-shine pointer-events-none" />
    </a>
  );
};

export default ContactLink;
