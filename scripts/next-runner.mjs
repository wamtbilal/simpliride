import { spawn } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const [, , mode = "dev", ...extraArgs] = process.argv;

const projectRoot = process.cwd();
const serverDir = path.join(projectRoot, ".next", "server");
const chunksDir = path.join(serverDir, "chunks");
const runtimePath = path.join(serverDir, "webpack-runtime.js");

const runtimeReplacements = [
  {
    from: 'installChunk(require("./" + __webpack_require__.u(chunkId)));',
    to: 'installChunk(require("./chunks/" + __webpack_require__.u(chunkId)));',
  },
  {
    from: 'b(require("./"+c.u(d)))',
    to: 'b(require("./chunks/"+c.u(d)))',
  },
];

function patchWebpackRuntime() {
  if (!existsSync(runtimePath)) {
    return false;
  }

  let current = readFileSync(runtimePath, "utf8");
  let changed = false;

  for (const replacement of runtimeReplacements) {
    if (current.includes(replacement.from) && !current.includes(replacement.to)) {
      current = current.replace(replacement.from, replacement.to);
      changed = true;
    }
  }

  if (changed) {
    writeFileSync(runtimePath, current, "utf8");
  }

  return changed;
}

function mirrorChunkFiles() {
  if (!existsSync(chunksDir)) {
    return false;
  }

  mkdirSync(serverDir, { recursive: true });
  let changed = false;

  for (const entry of readdirSync(chunksDir)) {
    if (!entry.endsWith(".js")) {
      continue;
    }

    const source = path.join(chunksDir, entry);
    const target = path.join(serverDir, entry);

    if (!existsSync(target) || statSync(source).size !== statSync(target).size) {
      copyFileSync(source, target);
      changed = true;
    }
  }

  return changed;
}

function maintainNextOutput() {
  try {
    patchWebpackRuntime();
    mirrorChunkFiles();
  } catch (error) {
    console.error("Failed to maintain Next output:", error);
  }
}

const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextBin, mode, ...extraArgs], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env,
});

const patchTimer = setInterval(maintainNextOutput, 250);
maintainNextOutput();

child.on("exit", (code, signal) => {
  clearInterval(patchTimer);
  maintainNextOutput();

  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
