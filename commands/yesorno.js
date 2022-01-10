const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yesorno')
		.setDescription('Answers your question with yes or no'),
	async execute(interaction) {
		Math.random() >= 0.5 ? interaction.reply('Yes, of course') : interaction.reply('?? GURL NO');
	},
};