    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} 準備好上戰場惹！`) ;
    }) ;

    client.on('message',msg=>{
        if(msg.content.startsWith(settings.prefix+'我的小寶貝')){
            msg.channel.send('YaYaYa!') ;
        }
    }) ;

    client.login(settings.token) ;
