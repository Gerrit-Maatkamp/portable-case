// import HeaderComponent from "./components/ui/HeaderComponent";
// import ProjectsComponent from "./components/ui/projects/ProjectsComponent";

import HeaderComponent from "@/components/ui/HeaderComponent";
import PhoneLink from "../components/ui/PhoneLink";
import FooterComponent from "@/components/ui/FooterComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <HeaderComponent />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <ProjectsComponent /> */}
        <h1>Aaaaaah</h1>
        <PhoneLink phoneNumber="3602984891" />
      </main>
      <FooterComponent className="flex gap-[24px] flex-wrap items-center justify-center bg-slate-100 dark:bg-slate-800 dark:text-white" />
    </div>
  );
}
