import { DenonConfig } from "https://deno.land/x/denon@2.3.2/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "app.ts",
      desc: "run app in development mode",
      log: "info",
      allow: ["env", "net", "read"],
    },
  },
};

export default config;
