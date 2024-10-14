import fs from "fs/promises";
import path from "path";
async function deleteFile(currentDir, [file]) {
  const filePath = path.join(currentDir, file);
  const checkFile = await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);
  if (checkFile) {
    await fs.unlink(filePath);
  } else {
    console.log("Operation failed");
  }
}
export { deleteFile };
