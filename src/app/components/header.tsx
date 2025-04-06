import EmailLink from "./ui/EmailLink";
import { ModeToggle } from "./ui/ModeToggle";
import PhoneLink from "./ui/PhoneLink";
import SocialLinks from "./ui/SocialLink";

export default function Header() {
  return (
    <>
      <header className="bg-gray-300 dark:bg-gray-950 w-full p-3 flex justify-between transition-colors">
        <div className="flex flex-col">
          <h1 className="dark:text-white text-6xl font-thin tracking-wider mb-4">
            Gerrit Maatkamp
          </h1>
          <div className="flex gap-2 flex-wrap">
            <EmailLink email="gerrit.maatkamp@gmail.com" />
            <PhoneLink
              phoneNumber="+13602984891"
              formattedNumber="360-298-4891"
            />
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
          </div>
        </div>

        <ModeToggle />
      </header>
    </>
  );
}
