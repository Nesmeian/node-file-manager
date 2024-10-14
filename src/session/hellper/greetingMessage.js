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

  showCurrentDir();
  input.prompt();
  input.on("SIGINT", () => processExit(userName, true));
  input.on("line", (message) => {
    showCurrentDir();
    if (command[message]) {
      console.log(command[message]);
    } else if (message === ".exit") {
      processExit(userName);
    } else {
      console.log("Invalid input");
    }
    input.prompt();
  });
}

export { greetingMessage };
