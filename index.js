const Discord = require("discord.js");
const config = require("./Data/config.json");

const client = new Discord.Client({
    intents: [ 32767 ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if (message.content === "hi") {
        message.reply("```Hello, World```")
    }
})

const welcomeChannelId = "866451016869478411"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
});

client.login(config.token);

