const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("hny")
		.setDescription("happy new year"),
	async execute(interaction) {
		interaction.reply("HUnnnyyyyYYYYY");
	},
};
