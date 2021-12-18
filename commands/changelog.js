const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('changelog')
		.setDescription('Check our changelog!'),
cooldowns : new Set(),
	    cooldown : 3,
	async execute(interaction) {


const LogEmbed = new MessageEmbed()
.setTitle(`Vultra - ChangeLogs`)
.setDescription(`Vultra Latest ChangeLog:

Economy + Music category removed
Economy moved to https://top.gg/bot/896727173136809994

ReWrote the bot the slash commands.

Using a really reliable host
https://somehost.xyz

`)
.setColor('RANDOM')
await interaction.reply({embeds: [LogEmbed]})
	},
};
