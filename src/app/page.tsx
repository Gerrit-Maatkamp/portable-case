import Footer from "./components/ui/footer";
import Header from "./components/ui/Header";
import Projects from "./components/ui/projects/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Projects />
      </main>
      <Footer className="flex gap-[24px] flex-wrap items-center justify-center bg-slate-100 dark:bg-slate-800 dark:text-white" />
    </div>
  );
}
