const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('Shows all commands')
        .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("choose the category that you want to see")
        .setRequired(true)
 .addChoice('Moderation', 'moderation')
        .addChoice('Misc', 'misc')
        .addChoice('Fun', 'fun')
        .addChoice('Other', 'other')
    ),
cooldowns : new Set(),
	    cooldown : 8,
	async execute(interaction) {
const choice = interaction.options.getString('category');
if (choice === "fun") {
msg='Help menu for Economy'
const economyEmbed = new MessageEmbed()
.setTitle('Economy Commands')
.setDescription(`:coin: **FUn commands:**
 
**/8ball** - Ask the 8ball any question you want!

**/angry** - Uh.. Your angry?

**/cry** - Why are you crying? What would make you feel better

**/gayrate** - Check your gay level.

**/happy** - You feel great, Your happy :)

**/meme** - Get a meme off reddit and have fun viewing it

**/pp** - Check your PP size...

**/rickroll** - Rickroll your friends lol
`)
.setColor('RANDOM')
return await interaction.reply({embeds: [economyEmbed]})


} else if (choice === "misc") {
msg='Help menu for Misc'

const miscEmbed = new MessageEmbed()
.setTitle('Misc Commands')
.setDescription(`
:wrench: **Misc commands:** 

**/bugreport** - Report bugs on our bot

**/changelog** - Check our changelog

**/support** - Join the bot support server

**/vote** - Vote for the bot

**/invite** - Invite the bot to your server

**/purge** - Purge messages in a channel

**/ping** - Check the bots latency

**/userinfo** - Info about a user

`)
.setColor('RANDOM')
return await interaction.reply({embeds: [miscEmbed]})
} 

	},
};
