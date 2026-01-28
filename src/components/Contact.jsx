/**** src/components/Contact.jsx ****/
import React, { useState } from "react";
import {
  EnvelopeIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import {
  GithubIcon,
  LinkedinIcon
} from "./SocialIcons";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const to = "balaskandavelsaravanabavan@gmail.com";
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || "Unknown"}`
    );
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="h-8 w-1 rounded-full bg-primary" />
          Contact me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side: contact info */}
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <p>
              For internship opportunities in software engineering or IT, feel
              free to reach out via email or use the contact form to send a
              quick <b>message</b>.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                  <EnvelopeIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    Email
                  </p>
                  <a
                    href="mailto:balaskandavelsaravanabavan@gmail.com"
                    className="text-primary dark:text-primary-light hover:underline break-all"
                  >
                    balaskandavelsaravanabavan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                  <GithubIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/SaravanabavanSobiyan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary dark:text-primary-light hover:underline break-all"
                  >
                    github.com/SaravanabavanSobiyan
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                  <LinkedinIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/saravanabavan-sobiyan-25b7b5204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary dark:text-primary-light hover:underline"
                  >
                    Saravanabavan Sobiyan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: form */}
          <form
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-dark text-white px-6 py-2.5 text-sm font-semibold shadow-md shadow-primary/40 transition-transform transform hover:-translate-y-0.5"
            >
              <PaperAirplaneIcon className="h-4 w-4 -rotate-12" />
              Send Message
            </button>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              This form opens your email app with the details filled in. You can
              review and send the email from there.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
