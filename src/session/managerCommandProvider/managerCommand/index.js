import { choseDir } from "../navigation/cd/index.js";
import { list } from "../navigation/ls/index.js";
import { getCurrentDir } from "../path/index.js";
const managerCommand = {
  ls: () => list(getCurrentDir()),
  cd: (newPath) => choseDir(getCurrentDir(), newPath),
};
export { managerCommand };
