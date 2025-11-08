"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function ScrollRevealSection({ id, className, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start a bit later and make movement more noticeable; settle at center.
    offset: ["start 92%", "center 50%"],
  });

  // More pronounced "coming from behind" effect: stronger translateY + scale + fade
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7], [64, 12, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.45], [0, 0.5, 1]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      style={
        reduceMotion
          ? undefined
          : {
              y,
              scale,
              opacity,
              willChange: "transform, opacity",
            }
      }
    >
      {children}
    </motion.section>
  );
}