import { LucidePhone, LucideMail } from "lucide-react";
import ContactLink from "./UI/ContactLink";
import { ModeToggle } from "./UI/ModeToggle";

export default function Header() {
  return (
    <>
      <header className="bg-gray-300 dark:bg-gray-950 w-full p-3 flex justify-between transition-colors">
        <div className="flex flex-col">
          <h1 className="dark:text-white text-6xl font-thin tracking-wider mb-4">
            Gerrit Maatkamp
          </h1>
          <div className="flex gap-2">
            <ContactLink
              type="phone"
              value="+13602984891"
              icon={
                <LucidePhone
                  size={20}
                  className="text-gray-200 dark:text-gray-300"
                />
              }
            >
              360-298-4891
            </ContactLink>
            <ContactLink
              type="email"
              value="gerrit.maatkamp@gmail.com"
              icon={
                <LucideMail
                  size={20}
                  className="text-gray-200 dark:text-gray-300"
                />
              }
            >
              gerrit.maatkamp@gmail.com
            </ContactLink>
          </div>
        </div>

        <ModeToggle />
      </header>
    </>
  );
}
