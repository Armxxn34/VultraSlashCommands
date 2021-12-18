const { MessageEmbed } = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { time }  = require("@discordjs/builders")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Sends your/another users info")
    .addUserOption(option =>
        option
        .setName("user")
        .setDescription("The user you wanna check out")
        .setRequired(false)
        ),
cooldowns : new Set(),
    cooldown: 5,
    
    async execute(interaction) {
        const user = interaction.options.getMember("user") || interaction.user

const roles =  user.roles.cache.forEach(role => roles += `${role.name}\n`)

        const embed = new MessageEmbed()
        .setTitle(`UserInfo`)
        .setThumbnail(user.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(`User:
Nickname: ${user.username}

ID: ${user.id.toString()}
 

Created at: ${time(Math.floor(user.createdTimestamp / 1000),"F").toString()}

Roles: Coming soon:tm:
`)
    await interaction.reply({embeds: [embed]})
    }
}
