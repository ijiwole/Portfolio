"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import ScrollRevealSection from "@/components/ScrollRevealSection";

export default function Hero() {
  return (
    <ScrollRevealSection id="hero" className="py-16 sm:py-24 bg-gradient-to-b from-zinc-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Adedamola Ijiwole
            </h1>
            <p className="mt-2 text-lg text-zinc-900 dark:text-zinc-300">
              Backend Engineer building scalable systems with Node.js & TypeScript
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm transition-all duration-200 motion-safe:active:scale-[0.98] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900"
              >
                View My Work
              </a>
              <a
                href="https://docs.google.com/document/d/1sIkeudE-0r1HMkGxj9HqlinZg6RbpZy7jglUzzZZjVI/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-3 mt-6 sm:mt-0 w-full sm:w-auto">
            <div className="hidden sm:block relative h-32 w-32 sm:h-40 sm:w-40 rounded-lg border border-zinc-300 dark:border-zinc-700 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=800&q=60"
                alt="Developer code photo"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 10rem, 8rem"
                priority
                placeholder="blur"
                blurDataURL={
                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' fill='%23141414'/></svg>"
                }
              />
            </div>
            <div className="flex gap-3 justify-center sm:justify-end w-full">
              <a
                aria-label="GitHub"
                href="https://github.com/ijiwole"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-md border border-zinc-300 dark:border-zinc-700 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 motion-safe:hover:scale-[1.08] motion-safe:active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700"
              >
                <Github className="size-5 text-zinc-700 dark:text-zinc-200 transition-colors duration-200 group-hover:text-black dark:group-hover:text-white" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/adedamola-ijiwole-960a05199/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-md border border-zinc-300 dark:border-zinc-700 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 motion-safe:hover:scale-[1.08] motion-safe:active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700"
              >
                <Linkedin className="size-5 text-zinc-700 dark:text-zinc-200 transition-colors duration-200 group-hover:text-black dark:group-hover:text-white" />
              </a>
              <a
                aria-label="Email"
                href="mailto:adedamolaijiwole@gmail.com"
                className="group relative p-2 rounded-md border border-zinc-300 dark:border-zinc-700 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 motion-safe:hover:scale-[1.08] motion-safe:active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700"
              >
                <Mail className="size-5 text-zinc-700 dark:text-zinc-200 transition-colors duration-200 group-hover:text-black dark:group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}