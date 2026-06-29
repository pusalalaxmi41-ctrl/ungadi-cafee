import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of ["index.html", "styles.css", "script.js", "assets"]) {
  await cp(join(root, entry), join(dist, entry), { recursive: true });
}

console.log("Production build created in dist/");
