import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add the modules that need to be treated as external dependencies
        "react",
        "react-dom",
        "axios", // Add any other libraries here as needed
      ],
    },
  },
});
