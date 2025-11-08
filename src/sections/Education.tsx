import { education } from "@/data/education";
import ScrollRevealSection from "@/components/ScrollRevealSection";

export default function Education() {
  return (
    <ScrollRevealSection id="education" className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 space-y-4">
          {education.map((ed, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
              <h3 className="text-lg font-bold">{ed.degree}</h3>
        <p className="text-sm text-black dark:text-zinc-300">{ed.school}</p>
        <p className="text-sm text-black dark:text-zinc-300">{ed.period}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollRevealSection>
  );
}