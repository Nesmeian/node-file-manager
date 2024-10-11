import { createInterface } from "readline";
function greetingMessage(userArg, userInitialization) {
  const grettingsMeesage = userArg
    .substring(userInitialization.length)
    .split("_")
    .map((e) => {
      let upperLetter = e[0].toUpperCase();
      return `${upperLetter}${e.slice(1)}`;
    })
    .join(" ");
  process.stdout.write(`Welcome to the File Manager, ${grettingsMeesage} \n`);
  const input = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  input.on("line", (message) => {
    if (message === ".exit") {
      process.stdout.write("Programm completed");
      process.exit();
    }
    return message + "\n";
  });
}
export { greetingMessage };
