/**** src/components/Hero.jsx ****/
import React from "react";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

function Hero({ theme }) {
  const resumePath = "/assets/SobiyanSaravanabavan_CV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "SobiyanSaravanabavan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            IT Intern
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Turning ideas into reliable{" "}
            <span className="text-primary">software solutions</span>.
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl">
            Motivated information technology undergraduate from SLIIT Northern Uni with a strong foundation in programming, 
            web development, and mobile app development, seeking an internship to grow as an <b>IT Professional</b>.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-dark text-white px-6 py-2.5 text-sm font-semibold shadow-lg shadow-primary/40 transition-transform transform hover:-translate-y-0.5"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download Resume
            </button>

            <a
              href="mailto:balaskandavelsaravanabavan@gmail.com"
              className="inline-flex items-center rounded-full border border-primary/40 text-primary dark:text-primary-light px-5 py-2.5 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Contact via Email
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a
              href="https://github.com/SaravanabavanSobiyan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-primary-light underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saravanabavan-sobiyan-25b7b5204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-primary-light underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary via-primary-light to-sky-400 opacity-60 blur-2xl group-hover:opacity-90 transition-opacity" />
            <div className="relative bg-slate-900/90 dark:bg-slate-900 rounded-3xl p-1 shadow-2xl shadow-primary/40">
              <div className="aspect-square w-64 sm:w-72 md:w-80 rounded-3xl overflow-hidden border border-slate-700/60">
                <img
                  src="/assets/profile.jpg"
                  alt="Saravanabavan Sobiyan"
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
