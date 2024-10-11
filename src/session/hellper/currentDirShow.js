import os from "os";
function showCurrentDir() {
  const homeDir = os.homedir;
  process.stdout.write(`You are currently in ${homeDir}\n`);
}
export { showCurrentDir };
