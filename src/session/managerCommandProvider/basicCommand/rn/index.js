import fs from "fs/promises";
import path from "path";
async function renameFile(currentDir, [file, renameFile]) {
  // try {
  console.log(file, renameFile);
  const filePath = path.join(currentDir, file);
  const renameFilePath = path.join(currentDir, renameFile);
  const [checkFile, checkNewFile] = await Promise.all([
    await fs
      .stat(filePath)
      .then(() => true)
      .catch(() => false),
    await fs
      .stat(renameFilePath)
      .then(() => true)
      .catch(() => false),
  ]);
  if ((checkFile, !checkNewFile)) {
    fs.rename(filePath, renameFilePath);
  } else {
    console.log("Operation failed");
  }
}
export { renameFile };
