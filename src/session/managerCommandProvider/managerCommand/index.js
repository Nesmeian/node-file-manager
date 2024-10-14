import { addFile } from "../basicCommand/add/index.js";
import { readFile } from "../basicCommand/cat/index.js";
import { renameFile } from "../basicCommand/rn/index.js";
import { copyFile } from "../basicCommand/cp/index.js";
import { moveFile } from "../basicCommand/mv/index.js";
import { choseDir } from "../navigation/cd/index.js";
import { list } from "../navigation/ls/index.js";
import { up } from "../navigation/up/index.js";
import { getCurrentDir } from "../path/index.js";
import { deleteFile } from "../basicCommand/rm/index.js";
const managerCommand = {
  ls: () => list(getCurrentDir()),
  up: () => up(getCurrentDir()),
  cd: (newPath) => choseDir(getCurrentDir(), newPath),
  cat: (file) => readFile(file),
  add: (file) => addFile(getCurrentDir(), file),
  rn: (fileName, newFileName) =>
    renameFile(getCurrentDir(), fileName, newFileName),
  cp: (fileName, copyFileName) =>
    copyFile(getCurrentDir(), fileName, copyFileName),
  mv: (fileName, moveFileName) =>
    moveFile(getCurrentDir(), fileName, moveFileName),
  rm: (file) => deleteFile(getCurrentDir(), file),
};
export { managerCommand };
