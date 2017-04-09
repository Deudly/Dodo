var Discord = require('discord.js');
const client = new Discord.Client();
var key = "MjUxMDc1NTg0MzcxODUxMjY3.C8kbvQ.d_OmgXYcyves6QY2ED3NGOH1Uzc";

client.on('ready', () => {
  console.log('Dodo is ready!');
});
client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
  if (message.content == "dodo"){
      message.reply("Hey, im just a dodo and here you have a selfie of me!")
      randomDodo(message);
  }
});
client.login(key);

function randomDodo(message){
    var num = Math.random();
    if (num < 0.1){
        message.reply(" http://www.defensacentral.com/ustedpregunta/data/articulos/como-era-el-pajaro-dodo/51210d91ce266.jpg");
    }
    else if (num < 0.2 && num > 0.1){
        message.reply(" https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dodo,_Natural_History_Museum,_London_2.JPG/1280px-Dodo,_Natural_History_Museum,_London_2.JPG");
    }else if (num < 0.3 && num > 0.2){
        message.reply(" http://www.ohnitsch.net/wordpress/wp-content/uploads/2008/07/080721_dodo.png");
    }else if (num < 0.4 && num > 0.3){
        message.reply(" http://vignette1.wikia.nocookie.net/los-inmortales/images/c/c4/Dodo.jpgs");
    }
}
