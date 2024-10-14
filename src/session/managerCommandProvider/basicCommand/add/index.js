import path from "path";
import fs from "fs/promises";
async function addFile(currentDir, [file]) {
  const createFilePath = path.join(currentDir, file);
  const existPath = await fs
    .stat(createFilePath)
    .then(() => true)
    .catch(() => false);
  if (existPath) {
    console.log("Operation Failed");
  } else {
    await fs.writeFile(createFilePath, "");
  }
}
export { addFile };
