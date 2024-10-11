import { session } from "./src/session/session.js";

async function App() {
  const currentDir = import.meta.dirname;
  session(currentDir);
}
App();
