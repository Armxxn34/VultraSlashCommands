const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping, pong, am I online?'),
        cooldowns : new Set(),
	    cooldown : 5,
	async execute(interaction) {
    const ping = interaction.client.ws.ping;

        const pingy = new MessageEmbed()
	.setColor('GREEN')
	.setTitle(":ping_pong: PONG :ping_pong: ")
	.setDescription(`My response time is ${ping}ms`)
	.setTimestamp()
		return interaction.reply({ embeds: [pingy] });
	},
};
