const program=require("commander");
const key=require("../commands/key");

program
  .command("set")
  .description("Set API KEY -- Get at https://nomics.com")
  .action(key.set);

program
  .command("show")
  .description("Show API KEY")
  .action(key.show);

program
  .command("remove")
  .description("Remove API KEY")
  .action(key.remove);


program.parse(process.argv)