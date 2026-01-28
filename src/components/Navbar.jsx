/**** src/components/Navbar.jsx ****/
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

function Navbar({ theme, toggleTheme }) {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white font-semibold shadow-lg shadow-primary/40">
            SS
          </div>
          <span className="font-semibold tracking-tight">
            Saravanabavan <span className="text-primary">Sobiyan</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleScroll(item.id)}
              className="relative text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary group-hover:w-full transition-all" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 shadow-sm hover:shadow-md transition-shadow"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-slate-700" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
