const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
		.setDescription('vote for Vultra'),
     cooldowns : new Set(),
	    cooldown : 5,
	async execute(interaction) {
 const VOTE = `[Vote for Vultra!](https://top.gg/bot/835894096501014588
)`
        const VoteEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Vote for Vultra")
	.setDescription(VOTE)
	.setTimestamp()
		return interaction.reply({ embeds: [VoteEmbed] });
	},
};
