import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 8000);
const host = process.env.HOST || "127.0.0.1";
const rootPath = resolve(root);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function localPathFromUrl(url) {
  const parsed = new URL(url, `http://${host}:${port}`);
  const pathname = decodeURIComponent(parsed.pathname);
  const normalized = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const target = resolve(join(root, normalized === "/" ? "index.html" : normalized));
  return target.startsWith(rootPath) ? target : join(root, "index.html");
}

const server = createServer(async (request, response) => {
  if (!request.url) {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  let filePath = localPathFromUrl(request.url);
  let missing = false;
  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) filePath = join(filePath, "index.html");
  } catch {
    missing = true;
  }

  if (missing) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const extension = extname(filePath).toLowerCase();
  response.setHeader("Content-Type", types[extension] || "application/octet-stream");
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Access-Control-Allow-Origin", "*");

  const stream = createReadStream(filePath);
  stream.on("error", () => {
    response.writeHead(404);
    response.end("Not found");
  });
  stream.pipe(response);
});

server.listen(port, host, () => {
  console.log(`UGAADI CAFE demo running at http://${host}:${port}/`);
  console.log("No hot reload, redirects, or auto-refresh are enabled.");
});
