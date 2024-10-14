import { list } from "../navigation/ls/index.js";
import { currentDir } from "../path/index.js";
const managerCommand = {
  up: "up",
  ls: () => list(currentDir),
};
export { managerCommand };
