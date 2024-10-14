import os from "os";
function getUserName() {
  console.log(os.userInfo().username);
}
export { getUserName };
