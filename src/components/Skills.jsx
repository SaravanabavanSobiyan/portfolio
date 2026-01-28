/**** src/components/Skills.jsx ****/
import React from "react";

const skillsData = [
  {
    title: "Programming",
    items: ["Java", "Python", "C", "JavaScript"]
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "PHP"]
  },
  {
    title: "Mobile Development",
    items: ["Android Studio", "Java", "Kotlin"]
  },
  {
    title: "Databases",
    items: ["MySQL", "SQLite", "MongoDB"]
  },
  {
    title: "Soft Skills",
    items: [
      "Problem solving",
      "Analytical thinking",
      "Teamwork & collaboration",
      "Time management",
      "Attention to detail"
    ]
  }
];

function Skills() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="h-8 w-1 rounded-full bg-primary" />
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                {group.title}
              </h3>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
