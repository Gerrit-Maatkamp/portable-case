import HeaderComponent from "@/components/ui/HeaderComponent";
import FooterComponent from "@/components/ui/FooterComponent";
import ProjectsComponent from "@/components/ui/ProjectsComponent";
import BioSummary from "@/components/ui/BioSummery";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <HeaderComponent />
      <BioSummary />
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ProjectsComponent />
      </div>
      <FooterComponent className="flex gap-[24px] flex-wrap items-center justify-center bg-slate-100 dark:bg-slate-800 dark:text-white" />
    </main>
  );
}
