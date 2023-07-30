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
    console.log(message);
})

client.login("MTEzMzM4MzIwMDI5NTYyODg3MQ.GXIgqk.iwnDUgK7V2oZaMKcDEvLMuuIOPfhb_h7noOOOc")