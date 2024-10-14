import { checkCpus } from "../cpus/index.js";
import { showEOl } from "../EOL/index.js";

const osCommands = {
  "--cpus": checkCpus,
  "--EOL": showEOl,
};
function handleOsCommand(option) {
  const command = osCommands[option];
  if (command) {
    command();
  } else {
    console.log("Invalid option. Available options are: --cpus");
  }
}
export { handleOsCommand };
