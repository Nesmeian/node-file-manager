import { setCurrentDir } from "../../path/index.js";
import fs from "fs/promises";
import path, { dirname } from "path";
import os from "os";
async function choseDir(currentDir, [newPath]) {
  const homedir = os.homedir();
  if (newPath === "..") {
    const parrent = dirname(currentDir);
    if (currentDir === homedir) {
      console.log("Operation failed");
    } else {
      setCurrentDir(parrent);
    }
  } else {
    try {
      await fs.stat(path.join(currentDir, newPath));
      setCurrentDir(path.join(currentDir, newPath));
    } catch (err) {
      console.log("Operation failed");
      console.log(err);
    }
  }
}
export { choseDir };
