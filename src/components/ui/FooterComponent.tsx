// src/components/ui/footer.tsx
import React from "react";
import { cn } from "@/lib/utils";
import PhoneLink from "./PhoneLink";
import EmailLink from "./EmailLink";
import SocialLinks from "./SocialLink";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export default function FooterComponent({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn("w-full border-t bg-background py-6", className)}
      {...props}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <nav className="flex flex-wrap p-4 gap-4 md:gap-6">
          <PhoneLink
            phoneNumber="+13602984891"
            formattedNumber="360-298-4891"
          />
          <EmailLink email="gerrit.maatkamp@gmail.com" />
          <SocialLinks
            socials={[
              {
                platform: "github",
                username: "gerritmaatkamp",
                ariaLabel: "View my GitHub profile",
              },
              {
                platform: "linkedin",
                username: "gerrit-maatkamp",
                ariaLabel: "Connect with me on LinkedIn",
              },
            ]}
          />
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gerrit Maatkamp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
