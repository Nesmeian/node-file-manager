import path from "path";
import { createHash } from "crypto";
import fs from "fs";
async function calculateHash(currentDir, [file]) {
  try {
    const searchFile = path.join(currentDir, file);
    console.log(searchFile);
    await fs.promises.stat(searchFile);
    const hash = createHash("sha256");
    const stream = fs.createReadStream(searchFile);
    stream.pipe(hash).setEncoding("hex").pipe(process.stdout);
  } catch (err) {
    console.log(err);
    console.log("Operation failed");
  }
}
export { calculateHash };
