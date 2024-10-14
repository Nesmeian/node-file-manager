import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
async function moveFile(currentDir, [file, moveFile]) {
  try {
    const filePath = path.join(currentDir, file);
    const moveFilePath = path.join(currentDir, moveFile);
    const sourceFile = path.resolve(filePath);
    const destPath = path.resolve(moveFilePath, path.basename(sourceFile));

    await pipeline(
      fs.createReadStream(sourceFile),
      fs.createWriteStream(destPath)
    );
    await fs.promises.unlink(sourceFile);
  } catch (err) {
    console.log(err);
    console.log("Operation Failed");
  }
}
export { moveFile };
