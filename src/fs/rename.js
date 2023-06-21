import { copyFile, constants, readdir, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesFolder = join(__dirname, "files");

const rename = async () => {
  try {
    await copyFile(
      join(filesFolder, "wrongFilename.txt"),
      join(filesFolder, "properFilename.md"),
      constants.COPYFILE_EXCL
    );
    console.log("source.txt был скопирован в destination.txt");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
