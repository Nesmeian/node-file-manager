import fs from "fs/promises";

import { greetingMessage } from "./hellper/greetingMessage.js";
async function session() {
  const args = process.argv.slice(2);
  const userInitialization = "--username=";
  const userArg = args.find((arg) => arg.startsWith(userInitialization));
  if (userArg) {
    greetingMessage(userArg, userInitialization);
  }
}
export { session };
