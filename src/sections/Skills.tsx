import { skills } from "@/data/skills";
import ScrollRevealSection from "@/components/ScrollRevealSection";

const TOOLTIP: Record<string, string> = {
  TypeORM: "ORM for Node.js",
  Prisma: "Type-safe ORM for Node.js",
  Drizzle: "Lightweight TypeScript ORM",
  "Nest.js": "Progressive Node.js framework",
  "Next.js": "React framework for SSR & SSG",
};

export default function Skills() {
  return (
    <ScrollRevealSection id="skills" className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-400">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    title={TOOLTIP[item] ?? undefined}
                    className="inline-flex items-center rounded-md bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 px-3 py-1 text-sm transition-transform duration-200 motion-safe:hover:scale-105 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollRevealSection>
  );
}