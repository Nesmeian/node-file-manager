import { greetingMessage } from "./hellper/greetingMessage.js";

async function session() {
  const args = process.argv.slice(2);
  const userInitializationArg = "--username=";
  const user =
    args.find((arg) => arg.startsWith(userInitializationArg)) ||
    `${userInitializationArg}Guest`;
  greetingMessage(user, userInitializationArg);
}
export { session };
