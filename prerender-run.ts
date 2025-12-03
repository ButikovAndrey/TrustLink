import { prerender } from "./prerender";

async function run() {
  await prerender("/");
  console.log("✅ prerender done");
  process.exit(0);
}

run();
