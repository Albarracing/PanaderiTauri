import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../frontend/AdminPanaderia/dist",
    rollupOptions: {
      input: {
        main: "../frontend/AdminPanaderia/index.html",
      },
    },
  },
});
