import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2000,
    proxy: {
      "/api": {
        target: "https://mern-auth-backend-f3yp.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
