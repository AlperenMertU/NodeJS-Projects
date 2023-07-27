const { Client, Intents } = require('discord.js');
require("dotenv").config();
const client = new Client({intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });                                         
const mySecret = process.env['TOKEN'];
 client.on("ready", () => {
 console.log(`Logged is as ${client.user.tag}!`);
});


client.on("message", (msg) => {
if(msg.content === "ping"){
msg.reply("pong");
}
});

client.login(mySecret);