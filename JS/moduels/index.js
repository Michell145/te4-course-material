import { data } from "./data/data.js";
import { extra } from "./data/extra.js";
import logger from "./data/utilis.js";

logger("Data and extra modules imported successfully.", "info");
for (const item of extra) {
  console.log(`${item.id}: ${item.name}`);
}

for (const item of data) {
  console.log(`${item.id}: ${item.name}`);
}
