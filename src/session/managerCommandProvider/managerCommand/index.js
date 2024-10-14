import { choseDir } from "../navigation/cd/index.js";
import { list } from "../navigation/ls/index.js";
import { getCurrentDir } from "../path/index.js";
const managerCommand = {
  up: "up",
  ls: () => list(getCurrentDir()),
  cd: () => choseDir(getCurrentDir()),
};
export { managerCommand };
