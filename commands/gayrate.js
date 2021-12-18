const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('gayrate')
		.setDescription('How gay are you?'),
cooldowns : new Set(),
	    cooldown : 8,
	async execute(interaction, client) {
const gay = Math.floor(Math.random() * Math.floor(100));
        const pingy = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Gayrate Machine!")
	.setDescription(`${interaction.user.username} is ${gay}% gay`)
	.setTimestamp()
		return interaction.reply({ embeds: [pingy] });
	},
};
