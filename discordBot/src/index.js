require("dotenv").config()

const { Client, GatewayIntentBits } = require("discord.js")
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on("ready", () => {
    console.log("bot hazır!");
})

client.on("messageCreate", (message) => {
    if (message.content === "esenlikler") {
        message.reply("esenlikler!")
    }
})

client.login(process.env.TOKEN)