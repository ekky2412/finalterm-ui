import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    plugins: [react()],
    server: {
      host: true,
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  });
};
