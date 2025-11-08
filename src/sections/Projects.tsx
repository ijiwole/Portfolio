"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Mermaid from "@/components/Mermaid";
import Image from "next/image";
import ScrollRevealSection from "@/components/ScrollRevealSection";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  const open = projects.find((p) => p.id === openId);

  return (
    <ScrollRevealSection id="projects" className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mt-2 text-black dark:text-zinc-300">
          Case studies with architecture, challenges, and results.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 transition-all duration-200 hover:shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              {p.image && (
                <div className="relative aspect-video overflow-hidden rounded-md bg-zinc-100 dark:bg-neutral-800">
                  <Image
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='18'><rect width='32' height='18' fill='%23141414'/></svg>"
                    }
                  />
                </div>
              )}
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-black dark:text-zinc-300">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-md bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.repo && (
                  <a className="text-sm underline text-zinc-900 dark:text-zinc-200 transition-opacity duration-200 hover:opacity-80" href={p.repo} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a className="text-sm underline text-zinc-900 dark:text-zinc-200 transition-opacity duration-200 hover:opacity-80" href={p.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                <button
                  className="text-sm underline text-zinc-900 dark:text-zinc-200 transition-opacity duration-200 hover:opacity-80"
                  onClick={() => setOpenId(p.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 motion-safe:animate-[fade-in_150ms_ease-out]" onClick={() => setOpenId(null)}>
            <div className="max-w-2xl w-full rounded-lg bg-white dark:bg-neutral-900 p-6 motion-safe:animate-[scale-in_180ms_ease-out]" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold">{open.title}</h3>
                <button className="text-sm underline transition-opacity duration-200 hover:opacity-80" onClick={() => setOpenId(null)}>Close</button>
              </div>
              <p className="mt-2 text-sm text-zinc-900 dark:text-zinc-300">{open.description}</p>
              {open.diagram && (
                <div className="mt-4">
                  <Mermaid chart={open.diagram} />
                </div>
              )}
              {open.details && (
                <div className="mt-4 grid gap-6 sm:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-bold">Problem</h4>
                    <p className="mt-1 text-sm text-zinc-900 dark:text-zinc-300">{open.details.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Approach</h4>
                    <ul className="mt-1 text-sm text-zinc-900 dark:text-zinc-300 list-disc pl-4">
                      {open.details.approach.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Challenges</h4>
                    <ul className="mt-1 text-sm text-zinc-900 dark:text-zinc-300 list-disc pl-4">
                      {open.details.challenges.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {open.details?.results && (
                <div className="mt-4">
                  <h4 className="text-sm font-bold">Results</h4>
                  <ul className="mt-1 text-sm text-zinc-900 dark:text-zinc-300 list-disc pl-4">
                    {open.details.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ScrollRevealSection>
  );
}