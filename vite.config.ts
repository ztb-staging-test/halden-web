import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// /api is proxied to halden-shipments-api; the edge proxy attaches the dashboard's API key.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { "/api": { target: "http://localhost:8000", rewrite: (p) => p.replace(/^\/api/, "") } },
  },
});
