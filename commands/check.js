const axios = require("axios");
const colors = require("colors");

var NOMICS_URL="https://api.nomics.com/v1/currencies/ticker";

const check={
  price(cmd){
    const formatter = new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: cmd.cur
    })   
    const KeyManager = require("../lib/keymanager");
    const keyManager=new KeyManager();
    var api_key;
    try{
      api_key=keyManager.getKey();
    }catch(err){
      console.error(err.message.red);
      return;
    }

    axios.get(`${NOMICS_URL}?key=${api_key}&ids=${cmd.coin}&convert=${cmd.cur}`)
      .then((res)=>{
        if(res['data'].length==0){
          console.log("Invalid Input".red)
        }
        for(let i=0;i<res['data'].length;i++){
          console.log(`${res['data'][i]['name'].blue} (${res['data'][i]['symbol'].yellow}) | Price: ${formatter.format(res['data'][i]['price']).magenta} | Rank: ${res['data'][i]['rank']}`.green)
        }
      }).catch(error=>{
        if(error.response.status==401)
          console.log("API Key given is invalid - Get your API Key from https://nomics.com".red)
        else
          console.log(error.message.red);
      })
  }
}
module.exports=check;