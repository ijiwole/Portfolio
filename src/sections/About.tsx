import ScrollRevealSection from "@/components/ScrollRevealSection";

export default function About() {
  return (
    <ScrollRevealSection id="about" className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold">About</h2>
        <div className="mt-4 space-y-3 text-black dark:text-zinc-300">
          <p>
            I’m a backend engineer focused on building reliable, scalable services in
            TypeScript and Node.js. I enjoy clean architecture, observability, and
            developer experience.
          </p>
          <p>
            With a background in Pure & Applied Mathematics, I approach systems with
            analytical rigor: modeling domains, optimizing performance, and simplifying
            complex data flows.
          </p>
          <p>
            Based in Nigeria — open to remote opportunities. Current focus:
            designing scalable SaaS architectures and event-driven systems.
          </p>
        </div>
      </div>
    </ScrollRevealSection>
  );
}