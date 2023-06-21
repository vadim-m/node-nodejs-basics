import crypto from "crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const targetFolder = join(__dirname, "files");

const calculateHash = async () => {
  try {
    const file = await readFile(
      join(targetFolder, "fileToCalculateHashFor.txt")
    );

    const fileHash = crypto.createHash("sha256").update(file).digest("hex");
    console.log(fileHash);
  } catch (error) {
    console.log(error);
  }
};

await calculateHash();
