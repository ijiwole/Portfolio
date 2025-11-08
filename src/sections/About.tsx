import ScrollRevealSection from "@/components/ScrollRevealSection";

export default function About() {
  return (
    <ScrollRevealSection id="about" className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2
          className="relative inline-block text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-emerald-400 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-300"
        >
          About
        </h2>
        <div className="mt-4 space-y-4 text-black dark:text-zinc-300">
          <p>
            I’m a backend engineer focused on building reliable, scalable services in TypeScript and Node.js.
          </p>
          <p>
            I enjoy clean architecture, observability, and developer experience.
          </p>
          <p>
            With a background in Pure & Applied Mathematics, I approach systems with
            analytical rigor: modeling domains, optimizing performance, and simplifying
            complex data flows.
          </p>
          <p>
            Based in Nigeria & open to remote opportunities.
          </p>
          <p>
            Current focus: designing scalable SaaS architectures and event-driven systems.
          </p>
        </div>
      </div>
    </ScrollRevealSection>
  );
}