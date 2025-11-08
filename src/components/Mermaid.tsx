"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    try {
      mermaid.initialize({ startOnLoad: false, securityLevel: "loose", theme: resolvedTheme === "dark" ? "dark" : "default" });
      if (ref.current) {
        ref.current.innerHTML = chart;
        // Let Mermaid scan and render the element
        mermaid.init(undefined, ref.current);
      }
    } catch (e) {
      // no-op in case of SSR hydration timing
    }
  }, [chart, resolvedTheme]);

  return (
    <div className="rounded-md border border-zinc-200 dark:border-zinc-800 p-3 overflow-x-auto">
      <div ref={ref} className="mermaid" />
    </div>
  );
}