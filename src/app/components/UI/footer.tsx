// src/components/ui/footer.tsx
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import PhoneLink from "./PhoneLink";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      className={cn("w-full border-t bg-background py-6", className)}
      {...props}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gerrit Maatkamp. All rights reserved.
        </p>
        <nav className="flex gap-4 md:gap-6">
          <PhoneLink
            phoneNumber="+13602984891"
            formattedNumber="360-298-4891"
          />
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
