let currentDir = process.cwd();
function setCurrentDir(newDir) {
  currentDir = newDir;
}

function getCurrentDir() {
  return currentDir;
}
export { setCurrentDir, getCurrentDir };
