// discord.js initialisation
const fs = require("fs");
const { Client, Collection, Intents, Message } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// This code requires you to have a .env file in the root of your project with the required tokens
const dotenv = require("dotenv");
dotenv.config();

client.once("ready", () => {
	console.log("Process complete, Bot Live!");

	// const reminderChannel = client.channels.cache.find(channel => channel.id === '918146076123476039');
	// setInterval(() => {
	// 	reminderChannel.send('Good Job on completing another day! 🎉\n I\'m proud of you!\n What have you gotten done today?\n\n Side Note: do you love me?');
	// }, 10000);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		interaction.reply({
			content: "There was an error trying to execute that command!",
			ephemeral: true,
		});
	}
});

client.login(process.env.TOKEN);
