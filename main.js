var Discord = require('discord.js');
const client = new Discord.Client();
var key = "";

client.on('ready', () => {
    console.log('Dodo is ready!');
});
client.on('message', message => {
    var dodo = 'dodo';
    var msg2 = message.content;
    var msg = msg2.toLowerCase();
    if (msg.indexOf(dodo) > -1) {
        if (msg.indexOf('ping') > -1) {
            message.reply('pong');
        }
        else if (msg.indexOf('hello') > -1) {
            message.reply('Hey. Whats up?');
        }
        else if (msg.indexOf('selfie') > -1) {
            message.reply("Hey, why do you want a photo of me? ")
            randomDodo(message);
        }
        else if (msg.indexOf('tired') > -1) {
            message.reply("Why dont you go to bed?")
        }
        else if (msg.indexOf('woke') > -1) {
            message.reply("Oh, really? Then sleep more the next night")
        }
        else if (msg.indexOf('how are you') > -1) {
            message.reply("I'm fine, thank you :D")
        }
        else if (msg.indexOf('like you') > -1) {
            message.reply("Me too but you know this love relationship would be impossible. You are a human and... I'm a dodo")
        }
        else if (msg.indexOf('bye') > -1) {
            message.reply("Hope to see you soon, bye bye")
        }
        else if (msg.indexOf('fuck you') > -1) {
            message.reply("Why? I'm just a cute and little dodo")
        }
        else if (msg.indexOf('good idea') > -1) {
            message.reply("Obviusly, all my ideas are good")
        }
    }

});
client.login(key);

function randomDodo(message) {
    var num = Math.random();
    if (num < 0.1) {
        message.reply(" http://www.defensacentral.com/ustedpregunta/data/articulos/como-era-el-pajaro-dodo/51210d91ce266.jpg");
    }
    else if (num < 0.2 && num > 0.1) {
        message.reply(" https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dodo,_Natural_History_Museum,_London_2.JPG/1280px-Dodo,_Natural_History_Museum,_London_2.JPG");
    } else if (num < 0.3 && num > 0.2) {
        message.reply(" http://www.ohnitsch.net/wordpress/wp-content/uploads/2008/07/080721_dodo.png");
    } else if (num < 0.4 && num > 0.3) {
        message.reply(" http://vignette1.wikia.nocookie.net/los-inmortales/images/c/c4/Dodo.jpgs");
    } else if (num < 1 && num > 0.4) {
        message.reply("https://t1.ea.ltmcdn.com/es/images/0/5/8/img_por_que_se_extinguio_el_dodo_20850_600.jpg");
    }
}
