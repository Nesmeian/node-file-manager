import fs from "fs/promises";
import path from "path";
async function list(currentDir) {
  try {
    const readDir = await fs.readdir(currentDir);
    let folder = [];
    let file = [];
    await Promise.all(
      readDir.map(async (e) => {
        const fileState = await fs.stat(path.join(currentDir, e));
        const isDir = fileState.isDirectory() ? folder.push(e) : file.push(e);
      })
    );
    let sortedList = folder
      .sort()
      .map((name) => {
        return { Name: name, Type: "directory" };
      })
      .concat(
        file.sort().map((name) => {
          return {
            Name: name,
            Type: "file",
          };
        })
      );
    console.table(sortedList, ["Name", "Type"]);
  } catch (err) {
    console.log("Operation failed");
  }
}
export { list };
