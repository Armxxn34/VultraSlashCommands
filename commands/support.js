const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('support')
		.setDescription('join the support server'),
     cooldowns : new Set(),
	    cooldown : 5,
	async execute(interaction) {
 const botAdd = `[Join our support server!](https://discord.gg/Mq3bSHMDpp
)`
        const pingy = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Official Support!")
	.setDescription(botAdd)
	.setTimestamp()
		return interaction.reply({ embeds: [pingy] });
	},
};
