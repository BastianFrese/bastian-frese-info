import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bastian-frese.info",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
