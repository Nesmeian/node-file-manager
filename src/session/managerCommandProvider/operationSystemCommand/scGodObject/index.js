import { showArchitecture } from "../architecture/index.js";
import { checkCpus } from "../cpus/index.js";
import { showEOl } from "../EOL/index.js";
import { getHomeDir } from "../homedir/index.js";
import { getUserName } from "../username/index.js";

const osCommands = {
  "--cpus": checkCpus,
  "--EOL": showEOl,
  "--homedir": getHomeDir,
  "--username": getUserName,
  "--architecture": showArchitecture,
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
