export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  image?: string;
  diagram?: string; // Mermaid definition
  details?: {
    problem: string;
    approach: string[];
    challenges: string[];
    results: string[];
  };
};

export const projects: Project[] = [
  {
    id: "enviryde",
    title: "Enviryde",
    description:
      "Carpooling and ride-sharing platform to find nearby rides, track journeys in real time, and reduce your carbon footprint.",
    tech: ["Carpooling", "Ride-sharing", "Real-time Tracking", "Sustainability"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1280&h=720&q=60",
    demo: "https://enviryde.com",
  },
  {
    id: "fightcanvas",
    title: "FightCanvas",
    description:
      "Fan engagement platform for combat sports where fighters own their stories, monetize content, and give fans behind-the-scenes access.",
    tech: ["Fan Engagement", "Creator Economy", "Combat Sports"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1280&h=720&q=60",
    demo: "https://fightcanvas.com",
  },
  {
    id: "centiiv",
    title: "Centiiv",
    description:
      "Blockchain-powered payment infrastructure for merchants in emerging markets: multi-currency accounts, payment links, APIs, escrow, and scan-to-pay.",
    tech: ["Payments", "Blockchain", "Escrow", "Cross-border", "APIs"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&h=720&q=60",
    demo: "https://www.centiiv.com/",
  },
];