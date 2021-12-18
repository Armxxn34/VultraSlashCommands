const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('cry')
		.setDescription('Awww, dont cry!'),
cooldowns : new Set(),
	    cooldown : 3,
	async execute(interaction) {

  const array = ["https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif", "https://media.giphy.com/media/14z4kx5yMo8Sc/giphy.gif", "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif", "https://media.giphy.com/media/l3q2RauzE5Vzf7iYo/giphy.gif"]
        const randomgif = Math.floor(Math.random() * array.length);
const embed = new MessageEmbed()
.setTitle(`${interaction.user.username} is crying!`)
.setImage(`${array[randomgif]}`)
.setColor('RANDOM')
await interaction.reply({embeds: [embed]})
	},
};
