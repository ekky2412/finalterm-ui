import { defineConfig, loadEnv } from "vite";
import envCompatible from "vite-plugin-env-compatible";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  return defineConfig({
    plugins: [react(), envCompatible()],
    server: {
      host: true,
    },
    // define: {
    //   __APP_ENV__: JSON.stringify(env.APP_ENV),
    // },
  });
};
