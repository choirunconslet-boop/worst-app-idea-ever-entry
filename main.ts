import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Woofl is the $9.99/month app that livestreams your dog's dreams to your smart fridge, so you can watch him chase the mailman in 4K while you eat cereal alone at midnight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
