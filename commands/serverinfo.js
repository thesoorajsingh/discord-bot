const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with Server Info'),
	async execute(interaction) {
		interaction.reply(`Server Name: ${interaction.guild.name}\nTotal members:${interaction.guild.memberCount}\nCoolest member during this command: ${interaction.guild.members.cache.random().displayName}`);
	},
};