const { userSeed } = require("./user.seeder");
const { guideData } = require("./guide.seeder");
const { contentSeed } = require("./contents.seeder");
const { eventSeed } = require("./event.seeder.");
const { iterationSeed } = require("./eventIteration.seeder.");
const { nationalitySeed } = require("./nationality.seeder");
const { orderSeed } = require("./order.seeder.");
const { pageSeed } = require("./pages.seeder");
const { subTypeSeed } = require("./orderSubType.seeder");
const { typeSeed } = require("./orderType.seeder.");

async function main() {
  await userSeed();
  await guideData();
  await nationalitySeed();
  await iterationSeed();
  await eventSeed();
  await typeSeed();
  await subTypeSeed();
  await orderSeed();
  await pageSeed();
  await contentSeed();
}

main();
