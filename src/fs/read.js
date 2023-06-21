import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const targetFolder = join(__dirname, "files");

const read = async () => {
  try {
    const file = await readFile(join(targetFolder, "fileToRead.txt"), {
      encoding: "utf8",
    });
    console.log(file);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      console.log(error);
    }
  }
};

await read();
