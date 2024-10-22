import { defineConfig } from "tsup";

export default defineConfig([
  {
    // Configuration for the browser version with dependencies
    entry: ["client/index.ts"],
    outDir: "dist/browser", // Output for browser build
    name: "SaascannonAccountManagement",
    globalName: "SaascannonAccountManagement",
    clean: true,
    format: ["iife"],
    platform: "browser",
    minify: true,
    external: [], // No external, bundle all dependencies
    splitting: true,
    cjsInterop: true,
    bundle: true,
    esbuildOptions(options) {
      options.footer = {
        // Ensure the default export is directly assigned to the global scope
        js: `window.SaascannonAccountManagement = SaascannonAccountManagement.SaascannonAccountManagement;`,
      };
    },
  },
  {
    // Configuration for the build without dependencies (Node.js or server-side)
    entry: ["client/index.ts"],
    outDir: "dist/node", // Output for the non-browser build
    format: ["esm", "cjs"], // Use the appropriate format for server build
    target: "node14", // Target node environment
    platform: "node",
    sourcemap: false,
    dts: true, // Generate .d.ts files
    clean: true,
  },
]);
