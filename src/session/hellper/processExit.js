function processExit(userName) {
  process.on("exit", () => {
    process.stdout.write(
      `Thank you for using File Manager, ${userName} goodbye!`
    );
  });
}
export { processExit };
