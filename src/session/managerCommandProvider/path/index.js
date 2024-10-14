import os from "os";
let currentDir = os.homedir();
function setCurrentDir(newDir) {
  currentDir = newDir;
}

function getCurrentDir() {
  return currentDir;
}
export { setCurrentDir, getCurrentDir };
