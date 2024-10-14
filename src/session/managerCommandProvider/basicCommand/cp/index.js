import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
async function copyFile(currentDir, [file, copyFile]) {
  const filePath = path.join(currentDir, file);
  const copyFilePath = path.join(currentDir, copyFile);
  const sourceFile = path.resolve(filePath);
  const destPath = path.resolve(copyFilePath, path.basename(sourceFile));

  await pipeline(
    fs.createReadStream(sourceFile),
    fs.createWriteStream(destPath)
  );
}
export { copyFile };
