const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pp')
		.setDescription('Whats ur pp size?'),
        cooldowns : new Set(),
	    cooldown : 5,
	async execute(interaction) {
        const ppSize = new MessageEmbed()
	.setColor('GREEN')
	.setTitle("PP Checker...")
	.setDescription(`Your pp size is 8${'='.repeat(Math.floor(Math.random() * 20))}D`)
	.setTimestamp()
		return interaction.reply({ embeds: [ppSize] });
	},
};
