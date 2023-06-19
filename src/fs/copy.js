import { copyFile, constants, readdir, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const copyFolder = join(__dirname, "files");
const targetFolder = join(__dirname, "files_copy");

const copy = async () => {
  try {
    const files = await readdir(copyFolder);
    await mkdir(targetFolder);

    for (const file of files) {
      await copyFile(join(copyFolder, file), join(targetFolder, file));
    }
  } catch (err) {
    if ((err.code = "ENOENT")) {
      throw new Error("FS operation failed");
    } else {
      console.error(err);
    }
  }
};

await copy();
