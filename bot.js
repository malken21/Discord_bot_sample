const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ], partials: [Partials.Channel]
});


client.on("ready", () => {
    console.log(`login: (${client.user.tag})`);
});

client.on('messageCreate', message => {
    if (message.content === 'test' && !message.author.bot) {
        message.reply({ content: 'test', allowedMentions: { repliedUser: false } })
    }
});

client.login("ここに自分のbotのTOKENをいれて");