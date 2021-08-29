const program=require("commander");
const check=require("../commands/check");

program
  .command("price")
  .description("Check for current cryptocurrency price")
  .option("--coin <type>", 
    "Specific Currencyto view in CSV format(crypto code)",
    "BTC,ETH,DOGE"
  )
  .option("--cur <currency>", 
    "Currency format, default INR",
    "INR"
  )
  .action(cmd=>check.price(cmd)) 
  .parse(process.argv);
