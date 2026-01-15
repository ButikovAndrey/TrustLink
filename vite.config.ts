import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
// import { vitePrerenderPlugin } from "vite-prerender-plugin";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
      },
      include: "**/*.svg",
    }),
    // vitePrerenderPlugin({
    //   prerenderScript: path.resolve(__dirname, "prerender.tsx"),
    //   renderTarget: "#root",
    //   additionalPrerenderRoutes: ["/"],
    // }),
  ],
  base: process.env.NODE_ENV === "production" ? "/TrustLink/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
