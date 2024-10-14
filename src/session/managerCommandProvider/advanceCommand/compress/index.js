import { createGzip } from "node:zlib";
import fs from "fs";
import path from "path";
async function compress(currentDir, [file, compressFile]) {
  const filePath = path.join(currentDir, file);
  const compressPath = path.join(currentDir, compressFile);
  const gzip = createGzip();

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    const compressFileStream = fs.createReadStream(filePath);
    const compressFileDestinatinoStream = fs.createWriteStream(compressPath);

    compressFileStream.pipe(gzip).pipe(compressFileDestinatinoStream);
    compressFileDestinatinoStream.on("finish", async (err) => {
      console.log("Operation completed");
      await fs.promises.unlink(filePath);
    });
  } catch {
    console.log("Operation failed");
  }
}

export { compress };
