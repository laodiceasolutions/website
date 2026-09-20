import { spawn, spawnSync } from "node:child_process";
import process from "node:process";

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--port", "3100"], {
  cwd: process.cwd(),
  detached: process.platform !== "win32",
  stdio: ["ignore", "pipe", "pipe"],
  env: { ...process.env, SITE_INDEXING_ENABLED: "true" },
});

server.stdout.pipe(process.stdout);
server.stderr.pipe(process.stderr);

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch("http://localhost:3100/tr");
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Timed out waiting for the browser-test server");
}

function stopServer() {
  if (!server.pid) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    try { process.kill(-server.pid, "SIGTERM"); } catch {}
  }
}

let testExitCode = 1;
try {
  await waitForServer();
  const cli = spawn(process.execPath, ["node_modules/@playwright/test/cli.js", "test"], {
    cwd: process.cwd(),
    stdio: "inherit",
    env: process.env,
  });
  testExitCode = await new Promise((resolve) => cli.on("exit", (code) => resolve(code ?? 1)));
} finally {
  stopServer();
}
process.exit(testExitCode);
