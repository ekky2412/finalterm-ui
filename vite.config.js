import { defineConfig, loadEnv } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  return defineConfig({
    plugins: [react(), EnvironmentPlugin(["API_URL"])],
    server: {
      host: true,
    },
    // define: {
    //   __APP_ENV__: JSON.stringify(env.APP_ENV),
    // },
  });
};
