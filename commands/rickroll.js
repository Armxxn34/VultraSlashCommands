const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rickroll')
		.setDescription('Rickroll ya friends!'),
        cooldowns : new Set(),
	    cooldown : 5,
	async execute(interaction) {

        const rickRoll = new MessageEmbed()
	.setColor('GREEN')
	.setTitle("GET RICKROLLED!")
  .setImage("https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif")
	.setTimestamp()
		return interaction.reply({ embeds: [rickRoll] });
	},
};
