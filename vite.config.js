import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  dotenv.config({ path: `./.env.${mode}` });
  // now you can access config with process.env.{configName}

  return defineConfig({
    plugins: [react()],
    server: {
      host: true,
    },
  });
};
