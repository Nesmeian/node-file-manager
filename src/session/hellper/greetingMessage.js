import { createInterface } from "readline";
import { processExit } from "./processExit.js";
import { showCurrentDir } from "./currentDirShow.js";
const command = {
  up: "up",
  jack: "asfasfasf",
};
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
    prompt: "-",
  });
  input.prompt();
  input.on("line", (message) => {
    showCurrentDir();
    if (command[message]) {
      console.log(command[message] + "\n");
    } else if (message === ".exit") {
      process.exit();
    } else {
      processExit(userName);
      console.log("Invalid input");
    }
  });
}
export { greetingMessage };
