const inquirer=require("inquirer");
const colors=require("colors");
const KeyManager = require("../lib//keymanager");
const {isRequired} = require("../utils/validation");


const key = {
  async set(){
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "apikey",
        message: "Enter your API Key - ".cyan + "https://nomics.com".red,
        validate: isRequired
      }
    ]);
    const apikey=keyManager.setKey(input);
    if(apikey)
      console.log("API Key set Successfully!".green)
  },
  show(){
    try{
      const keyManager=new KeyManager();
      const apikey=keyManager.getKey();
      console.log(colors.green("Your API Key - "+apikey))
      return apikey;
    }catch(err){
      console.log(colors.red(err.message));
    }
  },
  remove(){
    try{
      const keyManager=new KeyManager();
      const apikey=keyManager.deleteKey();
      console.log(colors.magenta("API Key "+apikey+" removed successfully!"));
      return apikey;
    }catch(err){
      console.log(colors.red(err.message));
    }
  }
}

module.exports=key;