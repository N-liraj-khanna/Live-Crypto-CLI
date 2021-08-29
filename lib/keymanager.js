const pkg=require("../package.json");
const Configstore=require("configstore");

class KeyManager{
  constructor(){
    this.config=new Configstore(pkg.name);
  }

  setKey(key){
    this.config.set('apikey',key);
    return key;
  }
  getKey(){
    const apikey=this.config.get('apikey');
    if(!apikey){
      throw new Error("Please provide your API Key -- Get your API Key at https://nomics.com");
    }
    return apikey.apikey;
  }
  deleteKey(){
    const apikey=this.config.get('apikey');
    if(!apikey){
      throw new Error("Please provide your API Key -- Get your API Key at https://nomics.com");
    }
    this.config.delete('apikey');
    return apikey.apikey;
  }
}

module.exports = KeyManager;