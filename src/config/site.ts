export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Terrible Lizards Wiki",
  shortName: "Terrible Lizards",
  logoText: "TL",
  tagline: "Dinosaur Horror Guides, Creatures & Walkthroughs",
  description: "Explore Terrible Lizards Wiki with dinosaur guides, gameplay tips, creature information, and useful resources to help players discover the prehistoric adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://terrible-lizards.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://terrible-lizards.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2920220/Terrible_Lizards/",
  heroVideoId: "nAEerNJJwW0", // Terrible Lizards - Official Gameplay Trailer
  social: {
    discord: "https://discord.gg/WK9TNNDCPP",
    youtube: "https://www.youtube.com/@WDRStudios",
    twitter: "https://twitter.com/TerribleLzrds",
    tiktok: "https://www.tiktok.com/@wdrstudiosllc",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
