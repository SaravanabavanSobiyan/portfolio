/**** src/components/Projects.jsx ****/
import React from "react";

const projects = [
  {
    title: "Online Parking System",
    tag: "IWT Group Project",
    techStack: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"],
    description:
      "A responsive web application that allows users to search, reserve, and manage parking slots online with database-backed booking management.",
    image: null
  },
  {
    title: "Online Tour Guide System",
    tag: "OOP Group Project",
    techStack: ["Java", "CSS", "MySQL", "Tomcat"],
    description:
      "A Java-based web system that provides tour packages, itinerary details, and booking flow for travelers using a MySQL-backed backend.",
    image: null
  },
  {
    title: "Dollars Electro Online Shopping",
    tag: "ITP Group Project",
    techStack: ["React.js", "Express.js", "Node.js", "MongoDB", "MERN"],
    description:
      "An e-commerce platform for electronic products built using the MERN stack with product listing, cart, and order flow features.",
    image: null
  },
  {
    title: "Medical Mobile Application",
    tag: "MAD Individual Project",
    techStack: ["Android Studio", "Java", "Kotlin"],
    description:
      "A mobile app to support medical-related tasks such as viewing information and managing basic health-related data using Android native technologies.",
    image: null
  }
];

function Projects() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="h-8 w-1 rounded-full bg-primary" />
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group h-full rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              {project.image ? (
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-1 bg-gradient-to-r from-primary via-sky-400 to-primary-light" />
              )}

              <div className="flex-1 flex flex-col p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                    {project.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Tech stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:bg-primary/20 dark:group-hover:text-primary-light transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
