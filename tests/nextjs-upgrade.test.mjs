import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);

function read(relativePath) {
  return readFileSync(new URL(relativePath, root), "utf8");
}

function sourceFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? sourceFiles(path) : /\.(?:js|jsx)$/.test(path) ? [path] : [];
  });
}

test("framework packages and Node requirement stay on the supported migration target", () => {
  const packageJson = JSON.parse(read("package.json"));
  assert.equal(packageJson.dependencies.next, "16.3.5");
  assert.equal(packageJson.dependencies.react, "19.3.0");
  assert.equal(packageJson.dependencies["react-dom"], "19.3.0");
  assert.equal(packageJson.devDependencies["eslint-config-next"], "16.3.5");
  assert.equal(packageJson.engines.node, ">=20.9.0");
});

test("locale propagation uses the Next.js 16 Proxy convention", () => {
  assert.equal(existsSync(new URL("src/middleware.js", root)), false);
  const proxy = read("src/proxy.js");
  assert.match(proxy, /export function proxy\(request\)/);
  assert.match(proxy, /x-site-locale/);
  assert.match(proxy, /_next\/static\|_next\/image/);
});

test("App Router request APIs are not accessed synchronously", () => {
  const appDirectory = fileURLToPath(new URL("src/app", root));
  for (const path of sourceFiles(appDirectory)) {
    const source = readFileSync(path, "utf8");
    assert.doesNotMatch(source, /params\s*:\s*\{/u, path);
    assert.doesNotMatch(source, /headers\(\)\s*\./u, path);
    assert.doesNotMatch(source, /props\.params/u, path);
  }
  assert.match(read("src/app/layout.js"), /await headers\(\)/);
});
