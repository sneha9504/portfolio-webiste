import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SNEHA.DEV — Full-Stack Developer",
    short_name: "SNEHA.DEV",
    description:
      "Portfolio of Sneha Wani, a Full-Stack Developer building modern, scalable web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#070d24",
    theme_color: "#070d24",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
