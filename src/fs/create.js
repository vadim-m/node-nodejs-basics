import { appendFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const targetFolder = join(__dirname, "files");

const create = async () => {
  try {
    await appendFile(join(targetFolder, "fresh.txt"), "I am fresh and young", {
      flag: "ax",
    });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    } else {
      console.log(error);
    }
  }
};

await create();
