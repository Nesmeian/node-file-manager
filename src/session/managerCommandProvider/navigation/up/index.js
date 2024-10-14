import { getCurrentDir, setCurrentDir } from "../../path/index.js";
import path from "path";
import os from "os";
async function up() {
  const homedir = os.homedir();
  const parrent = path.dirname(getCurrentDir());
  if (getCurrentDir() === homedir) {
    console.log("Operation failed");
  } else {
    setCurrentDir(parrent);
  }
}
export { up };
