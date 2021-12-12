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
 .addChoice('Economy', 'economy')
        .addChoice('Misc', 'misc')
        .addChoice('Fun', 'fun')
        .addChoice('Economy2', 'economy2')
    ),
cooldowns : new Set(),
	    cooldown : 8,
	async execute(interaction) {
const choice = interaction.options.getString('category');
if (choice === "economy") {
msg='Help menu for Economy'
const economyEmbed = new MessageEmbed()
.setTitle('Economy Commands')
.setDescription(`:coin: **Economy commands:**
 
**/transfer** - instead of having to withdraw and give you can give straight from the bank

**/bal** - Shows your bank balance, wallet balance and overall networth.

**/beg** - Makes you as the user beg and earn a nice little profit!

**/work** - Makes you work for money because you cant be lazy and expect money!

**/deposit** - Deposits the money that you earned into your bank account to keep it safe.

**/give** - An optional command where you can give some money to a friend or a friend to you.

**/withdraw** - Can take money out of your bank account and put it in your wallet...

**/rob** - Allows you to rob from people, but why would you want to do that?

**/bet** - Bet cash and make yourself rich!`)
.setColor('RANDOM')
return await interaction.reply({embeds: [economyEmbed]})
} else if (choice === "misc") {
msg='Help menu for Misc'
const miscEmbed = new MessageEmbed()
.setTitle('Misc Commands')
.setDescription(`
:wrench: **Misc commands:** 

**/ping** - Check the latency of the bot

**/invite** - Invite the bot to your server

**/support** - Join the bot support server

**/vote** - Vote for the bot

**/commands** - Check commands for the bot

**/commandsinfo** - Check commands status`)
.setColor('RANDOM')
return await interaction.reply({embeds: [miscEmbed]})
} else if (choice === "fun") {
msg='Help menu for Fun'
const funEmbed = new MessageEmbed()
.setTitle('Fun commands')
.setDescription(`:joy: **Fun commands:** 

**/meme** - Get memes from Reddit

**/gayrate** - Just a funny command to use on friends

**/roast** - Roast others, have some fun 

**/say** - Say something using the bot `)
.setColor('RANDOM')
return await interaction.reply({embeds: [funEmbed]})
} else if (choice === "economy2") {
msg='Help menu for Economy2'
const economy2Embed = new MessageEmbed()
.setTitle('Economy Page 2')
.setDescription('Coming Soon :tm:')
.setColor('RANDOM')
return await interaction.reply({embeds: [economy2Embed]})
}

	},
};
