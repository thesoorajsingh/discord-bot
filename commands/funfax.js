const { SlashCommandBuilder } = require("@discordjs/builders");

require("dotenv").config();

const API_KEY = process.env.API_KEY;

module.exports = {
	data: new SlashCommandBuilder().setName("funfax").setDescription("spits fax"),
	async execute(interaction) {
		console.log("fax have been spat by " + interaction.user.username);
		const fact = await fetchFacts();
		interaction.reply(fact);
	},
};

const fetchFacts = () => {
	const axios = require("axios");
	const options = {
		method: "GET",
		url: "https://api.api-ninjas.com/v1/facts",
		params: { limit: "1" },
		headers: { "X-API-KEY": "KGhl7O+CdM9z2jMvcjBlVg==A8NK1PlCekEhXrFP" },
	};

	return axios
		.request(options)
		.then((res) => {
			return res.data[0].fact;
		})
		.catch((error) => console.error(error));
};
