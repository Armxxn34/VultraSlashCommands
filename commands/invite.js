const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Invite for Vultra'),
     cooldowns : new Set(),
	    cooldown : 5,
	async execute(interaction) {
 const INVITE = `[Thanks for inviting me!](https://discord.com/api/oauth2/authorize?client_id=835894096501014588&permissions=0&scope=bot%20applications.commands
)`
        const InviteEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Inviting Vultra!")
	.setDescription(VOTE)
	.setTimestamp()
		return interaction.reply({ embeds: [InviteEmbed] });
	},
};
