import { ModeToggle } from "./ModeToggle";

export default function HeaderComponent() {
  return (
    <>
      <header className="relative w-full h-60 flex flex-col items-center justify-center transition-colors overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-400 animate-gradient-x opacity-100 dark:opacity-0 transition-opacity duration-100"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-900 animate-gradient-x opacity-0 dark:opacity-100 transition-opacity duration-100"></div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="dark:text-white text-6xl font-thin tracking-wider mb-4">
            Gerrit Maatkamp
          </h1>
          <p className="dark:text-white text-gray-700">
            <span className="word-animation">Software</span>{" "}
            <span className="word-animation">Engineer</span>{" "}
            <span className="word-animation"></span>
            {"  "}
            <span className="word-animation">UX/UI</span>{" "}
            <span className="word-animation">Design</span>
          </p>
        </div>
        <span className="absolute top-5 right-5 z-10">
          <ModeToggle />
        </span>
      </header>
    </>
  );
}
