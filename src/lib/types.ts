// src/lib/types.ts

// Contact link types
export type ContactLinkProps = {
  type: "phone" | "email" | "sms";
  value: string;
  icon: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

// Phone link types
export type PhoneLinkProps = {
  phoneNumber: string;
  formattedNumber?: string;
  className?: string;
  scrollThreshold?: number;
};

// Email link types
export type EmailLinkProps = {
  email: string;
  displayEmail?: string;
  className?: string;
};

// Social link types
export type SocialPlatform = "linkedin" | "github";

export type SocialItem = {
  platform: SocialPlatform;
  username: string;
  ariaLabel?: string;
};

export type SocialLinksProps = {
  socials: SocialItem[];
  className?: string;
};

export type Step = {
  heading: string;
  paragraph: string;
  images: string[];
};

export type ProjectItem = {
  id: string;
  name: string;
  summary?: string;
  imageUrl?: string;
  steps?: Step[];
  prototype?: string;
  prototypeHeader?: string;
  prototypeText?: string;
  url?: string;
};
