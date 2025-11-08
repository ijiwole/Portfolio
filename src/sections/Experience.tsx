import { experience } from "@/data/experience";
import ScrollRevealSection from "@/components/ScrollRevealSection";

export default function Experience() {
  return (
    <ScrollRevealSection id="experience" className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 space-y-6">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.role}-${item.period}`}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">{item.role}</h3>
                  <p className="text-sm text-zinc-900 dark:text-zinc-300">
                    {item.company}
                    {item.location ? ` • ${item.location}` : ""}
                  </p>
                  {item.industry && (
                    <p className="text-xs text-zinc-800 dark:text-zinc-300 mt-1">
                      {item.industry}
                    </p>
                  )}
                </div>
                <span className="text-sm text-zinc-900 dark:text-zinc-300 whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              {item.tech && item.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={`${item.company}-${t}`}
                      className="text-xs rounded-md bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-900 dark:text-zinc-300">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ScrollRevealSection>
  );
}