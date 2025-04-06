import { ModeToggle } from "./ModeToggle";

export default function HeaderComponent() {
  return (
    <>
      <header className="relative w-full p-3 flex flex-col justify-between transition-colors overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0">
          {/* Light mode gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-400 animate-gradient-x opacity-100 dark:opacity-0 transition-opacity duration-100"></div>
          {/* Dark mode gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-900 animate-gradient-x opacity-0 dark:opacity-100 transition-opacity duration-100"></div>
        </div>

        {/* Content with relative positioning to appear above the gradient */}
        <div className="relative z-10">
          <h1 className="dark:text-white text-6xl font-thin tracking-wider mb-4">
            Gerrit Maatkamp
          </h1>
          <p className="dark:text-white text-gray-700">
            Software Engineer | UX Design
          </p>
        </div>
        <span className="absolute top-5 right-5 z-10">
          <ModeToggle />
        </span>
      </header>
    </>
  );
}
