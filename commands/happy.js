const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('happy')
		.setDescription('Your a happy person!'),
cooldowns : new Set(),
	    cooldown : 3,
	async execute(interaction) {

  const array = ["https://media.giphy.com/media/13k4VSc3ngLPUY/giphy.gif", "https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif", "https://media.giphy.com/media/39onL3yTmFw8I8agYk/giphy.gif", "https://media.giphy.com/media/MVDPX3gaKFPuo/giphy.gif"]
        const randomgif = Math.floor(Math.random() * array.length);

const embed = new MessageEmbed()
.setTitle(`${interaction.user.username} is happy!`)
.setImage(`${array[randomgif]}`)
.setColor('RANDOM')
await interaction.reply({embeds: [embed]})
	},
};
