

const Discord = require('discord.js');
// const Discord = require('discord.js');

// Using Intents class
const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages
  ]})
  
client.on('message', (msg) => {
  // Send back a reply when the specific command has been written by a user.
  if (msg.content === '!hello') {
    msg.reply('Hello, World!');
  }
});

client.login("MTEzMzM4MzIwMDI5NTYyODg3MQ.GlSy7w.Vd5UYNpaTTpASSFR13OHSGDsS0-ONQbqqpdyss")
