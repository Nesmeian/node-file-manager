import { choseDir } from "../navigation/cd/index.js";
import { list } from "../navigation/ls/index.js";
import { up } from "../navigation/up/index.js";
import { getCurrentDir } from "../path/index.js";
const managerCommand = {
  ls: () => list(getCurrentDir()),
  up: () => up(getCurrentDir()),
  cd: (newPath) => choseDir(getCurrentDir(), newPath),
  read: (read) => readFile(read),
};
export { managerCommand };
