function processExit(userName, sigintexit = false) {
  let sigintExitStr = sigintexit === true ? "\n" : "";
  process.stdout.write(
    `${sigintExitStr}Thank you for using File Manager, ${userName} goodbye!\n`
  );
  process.exit();
}
export { processExit };
