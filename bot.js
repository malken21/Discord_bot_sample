const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.on("ready", () => {
  console.log(`ログイン完了しました\n${client.user.tag}`);
});

client.on('messageCreate', message => {
	if (message.content === 'test' && !message.author.bot) {
	    message.reply({ content: 'test', allowedMentions: { repliedUser: false }})
	}
});
client.login('ここに自分のbotのTOKENをいれて');
