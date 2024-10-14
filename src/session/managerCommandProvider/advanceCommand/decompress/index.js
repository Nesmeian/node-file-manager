import { createGunzip } from "node:zlib";
import fs from "fs";
import path from "path";
async function decompress(currentDir, [file, compressFile]) {
  const filePath = path.join(currentDir, file);
  const decompressPath = path.join(currentDir, compressFile);
  const gunzip = createGunzip();

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    const decompressFileStream = fs.createReadStream(filePath);
    const decompressFileDestinatinoStream =
      fs.createWriteStream(decompressPath);

    decompressFileStream.pipe(gunzip).pipe(decompressFileDestinatinoStream);
    decompressFileDestinatinoStream.on("finish", async (err) => {
      console.log("Operation completed");
      await fs.promises.unlink(filePath);
    });
  } catch {
    console.log("Operation failed");
  }
}

export { decompress };
