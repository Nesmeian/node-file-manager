import { createInterface } from "readline";
import { processExit } from "./processExit.js";
import { showCurrentDir } from "./currentDirShow.js";
function greetingMessage(userArg, userInitialization, currentDir) {
  const userName = userArg
    .substring(userInitialization.length)
    .split("_")
    .map((e) => {
      let upperLetter = e[0].toUpperCase();
      return `${upperLetter}${e.slice(1)}`;
    })
    .join(" ");
  process.stdout.write(`Welcome to the File Manager, ${userName} \n`);
  const input = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  input.on("line", (message) => {
    showCurrentDir(currentDir);
    if (message === ".exit") {
      process.exit();
    }
    processExit(userName, currentDir);
    return message + "\n";
  });
}
export { greetingMessage };
