var config = require('./config.json');
var Discord = require('discord.js');
var client = new Discord.Client();

client.once('ready', () => {
    console.log(`Succesfully Set Presence to ${client.user} `)
    client.user.setActivity('Presence is Working', {type: "LISTENING"})

});
client.login(config.token);