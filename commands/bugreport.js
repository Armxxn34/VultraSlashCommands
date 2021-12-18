const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("bugreport")
    .setDescription("Report a user breaking our rules or abusing our bot") 
.addStringOption((option) =>
      option
        .setName("bot")
        .setDescription("Which bot is being abused??")
        .setRequired(true)
.addChoice('Vultra', 'vultra')
.addChoice('MrMoney', 'mrmoney')
)
    .addStringOption(option => 
        option
        .setName("reason")
        .setDescription("Reason for reporting the user.")
        .setRequired(true)
        )
        .addUserOption(option =>
            option
            .setName("user")
            .setDescription("User you wanna report.")
            .setRequired(true)
        ),
cooldowns: new Set(),
    cooldown: 15,
    async execute(interaction) {

const choice = interaction.options.getString('category');
        const member = interaction.options.getUser("user")
        const reason = interaction.options.getString("reason")
        if(choice === "Vultra"){
const embed = new MessageEmbed()
.setTitle('New Report')
.setDescription(`
A new report against a user has been made:

Reporter: ${interaction.user.username}

Reported User: ${member.username}

Reason : ${reason}`)
.setColor('RANDOM')

        interaction.client.channels.fetch("921756046958133288").then(channel  => 
            channel.send({embeds: [embed]})
        )
const successEmbed = new MessageEmbed()
.setTitle('Success')
.setDescription('Your report has been sent!')
.setColor('RANDOM')
        await interaction.reply({embeds: [successEmbed]})
        }

if (choice === "mrmoney"){
const MrMoney = new MessageEmbed()
.setTitle('New Report')
.setDescription(`
A new report against a user has been made:

Reporter: ${interaction.user.username}

Reported User: ${member.username}

Reason : ${reason}`)
.setColor('RANDOM')

        interaction.client.channels.fetch("897390218976591953").then(channel  => 
            channel.send({embeds: [MrMoney]})
        )
const successEmbed = new MessageEmbed()
.setTitle('Success')
.setDescription('Your report has been sent!')
.setColor('RANDOM')
        await interaction.reply({embeds: [successEmbed]})
}
    }
}
