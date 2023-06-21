import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const targetFolder = join(__dirname, "files");

const remove = async () => {
  try {
    await rm(join(targetFolder, "fileToRemove.txt"));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
