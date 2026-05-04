/**** src/components/About.jsx ****/
import React from "react";

function About() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="h-8 w-1 rounded-full bg-primary" />
          About me
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I am undergraduate  Information Technology student at SLIIT NORTHERN UNI, enjoys building practical web and mobile applications that solve real-world problems.  
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I have hands-on experience across the MERN stack, Java, PHP, and Android development, 
            and continuously improves my technical and soft skills through academic projects and 
            self-learning. I am eager to contribute to a collaborative team as IT intern while expanding my knowledge of modern development practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
