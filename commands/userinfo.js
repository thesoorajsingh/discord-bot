const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with User info'),
	async execute(interaction) {
		interaction.reply(`User Name: ${interaction.user.username}\nUser ID: ${interaction.user.id}`);
	},
};