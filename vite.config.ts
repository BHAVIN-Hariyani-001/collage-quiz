import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: true, // force-enable the Cloudflare/Nitro build pipeline
  tanstackStart: {
    server: { entry: "server" },
  },
});