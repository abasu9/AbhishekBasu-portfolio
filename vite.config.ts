import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Netlify (and most hosts) want `/`. GitHub Pages project sites need `/<repo>/`.
  // Set `VITE_BASE=/AbhishekBasu-portfolio/` only for the GitHub Pages deploy build.
  const base = process.env.VITE_BASE || "/";

  return {
    base,
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes("node_modules/three/") ||
              id.includes("node_modules/three-stdlib/")
            ) {
              return "three";
            }
            if (id.includes("node_modules/gsap")) {
              return "gsap";
            }
          },
        },
      },
      chunkSizeWarningLimit: 600,
    },
  };
});
