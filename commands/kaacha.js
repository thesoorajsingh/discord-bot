const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kaacha')
		.setDescription('Replies with man to finish cool sentence 😎'),
	async execute(interaction) {
		interaction.reply('Man 😎🐍');
	},
};