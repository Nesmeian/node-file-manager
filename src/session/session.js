import { managerCommand } from "./managerCommandProvider/managerCommand/index.js";
import { createInterface } from "readline";
import { showCurrentDir } from "../hellper/currentDirShow/index.js";
import { processExit } from "../hellper/processExit/index.js";
import { getCurrentDir } from "./managerCommandProvider/path/index.js";
async function session() {
  const args = process.argv.slice(2);
  const userInitializationArg = "--username=";
  const user =
    args.find((arg) => arg.startsWith(userInitializationArg)) ||
    `${userInitializationArg}Guest`;
  const userName = user
    .substring(userInitializationArg.length)
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
  await showCurrentDir(getCurrentDir());
  input.prompt();
  input.on("SIGINT", () => processExit(userName, true));
  input.on("line", async (message) => {
    if (managerCommand[message]) {
      await managerCommand[message]();
    } else if (message === ".exit") {
      processExit(userName);
    } else {
      console.log("Invalid input");
    }
    await showCurrentDir(getCurrentDir());
    input.prompt();
  });
}
export { session };
