const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("ban users")
    .addUserOption(option =>
        option
        .setName("member")
        .setDescription("The member u wanna ban")
        .setRequired(true)
    )
    .addStringOption(option =>
        option
        .setName("reason")
        .setDescription("The reason you would like to ban this user")
        .setRequired(false)
        ),
cooldowns: new Set(),
cooldown: 5,
    async execute(interaction, client) {

        if(!interaction.member.permissions.has("BAN_MEMBERS")) {
            return await interaction.reply("You are missing the `BAN_MEMBERS` permission.")
        } else if (interaction.member.permissions.has("BAN_MEMBERS")){

        const reason = interaction.options.getString("reason") || "No reason provided."
        const user = interaction.options.getMember("member")

if(user === interaction.guild.me){
const userError2 = new MessageEmbed()
.setTitle('Unable To Ban')
.setDescription('I cannot ban myself lmao')
.setColor('RANDOM')
return await interaction.reply({embeds: [userError]})
}

if(!user){
const userError = new MessageEmbed()
.setTitle('Unknown User')
.setDescription('That user doesn`t exist, or has left!')
.setColor('RANDOM')
return await interaction.reply({embeds: [userError]})
}

if(interaction.guild.ownerId === user.id) {
const GuildError = new MessageEmbed()
.setTitle('Unable to ban')
.setDescription('You cant ban the guild owner :joy:')
.setColor('RANDOM')
            return await interaction.reply({embeds: [GuildError]})
}


const dmEmbed = new MessageEmbed()
.setTitle('You were banned')
.setDescription(`You were banned from ${interaction.guild.name}:

Responsible Moderator: ${interaction.user.username}

Reason: ${reason}
`)
.setColor('RANDOM')
user.send({embeds: [dmEmbed]}).then(()=>

user.ban(`${reason}`)
).catch(err => user.ban())

const mutedEmbed = new MessageEmbed()
.setTitle('User has been banned')
.setDescription(`

User has been banned:

User: ${user.id}

Reason: ${reason}

Responsible Moderator: ${interaction.user.username} `)
.setColor('RANDOM')
        await interaction.reply({embeds: [mutedEmbed]})
        } 
    }
}
