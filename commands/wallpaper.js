const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wallpaper')
		.setDescription('Fethces and Gives a random wallpaper'),
	async execute(interaction) {
		interaction.reply('https://unsplash.it/1920/1080?random');
	},
};