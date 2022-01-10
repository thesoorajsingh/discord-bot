const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hottest')
		.setDescription('Replies with the hottest member of the server'),
	async execute(interaction) {
		interaction.reply(`The hottest member of the server is ${interaction.guild.members.cache.random().displayName}`);
	},
};