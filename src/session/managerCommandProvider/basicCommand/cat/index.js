import path from "path";
import { getCurrentDir } from "../../path/index.js";
import fs from "fs";
async function readFile([file]) {
  try {
    await fs.promises.stat(path.join(getCurrentDir(), file));
    const read = fs.createReadStream(path.join(getCurrentDir(), file));
    read.on("data", (data) => {
      process.stdout.write(`${data}\n-`);
    });
  } catch (err) {
    console.log("Operation Failed"); // Log the actual error message }
  }
}
export { readFile };
