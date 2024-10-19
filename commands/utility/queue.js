const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Client, GatewayIntentBits, Message } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { Controller, Get, Post, render } = require('axis')
const jq = new ButtonBuilder()
	.setCustomId('jqueue')
	.setLabel('join queue')
	.setStyle(ButtonStyle.Success);
const dq = new ButtonBuilder()
	.setCustomId('dqueue')
	.setLabel('leave queue')
	.setStyle(ButtonStyle.Danger);
const row = new ActionRowBuilder()
	.addComponents(jq, dq);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('queue')
		.setDescription('sets up queue'),
	async execute(interaction) {
		const response = await interaction.reply({
			content: 'no one in queue',
			components: [row]
		});

	},
}; 
