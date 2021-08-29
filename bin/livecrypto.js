#!/usr/bin/env node

const { program } = require("commander");
const pkg=require("../package.json");

program
  .version(pkg.version)
  .command("key", "Adminster API KEY -- https://nomics.com")
  .parse(process.argv);

