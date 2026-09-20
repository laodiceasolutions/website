import { spawnSync } from "node:child_process";
import process from "node:process";

const result = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build"], {
  cwd: process.cwd(),
  stdio: "inherit",
  env: { ...process.env, SITE_INDEXING_ENABLED: "true" },
});

process.exit(result.status ?? 1);
