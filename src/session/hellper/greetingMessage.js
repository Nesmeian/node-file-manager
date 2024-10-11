import { createInterface } from "readline";
import { processExit } from "./processExit.js";
import { showCurrentDir } from "./currentDirShow.js";
function greetingMessage(userArg, userInitialization) {
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
    showCurrentDir();
    if (message === ".exit") {
      process.exit();
    }
    processExit(userName);
    return message + "\n";
  });
}
export { greetingMessage };
