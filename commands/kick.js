const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick users")
    .addUserOption(option =>
        option
        .setName("member")
        .setDescription("The member u wanna kick")
        .setRequired(true)
    )
    .addStringOption(option =>
        option
        .setName("reason")
        .setDescription("The reason you would like to kick this user")
        .setRequired(false)
        ),
cooldowns: new Set(),
cooldown: 5,
    async execute(interaction, client) {

        if(!interaction.member.permissions.has("KICK_MEMBERS")) {
            return await interaction.reply("You are missing the `KICK_MEMBERS` permission.")
        } else if (interaction.member.permissions.has("KICK_MEMBERS")){

        const reason = interaction.options.getString("reason") || "No reason provided."
        const user = interaction.options.getMember("member")
if(user === "835894096501014588"){
const userError2 = new MessageEmbed()
.setTitle('Unable to kick')
.setDescription('I cannot kick myself')
.setColor('RANDOM')
return await interaction.reply({embeds: [userError2]})
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
.setDescription('Don`t try kick the server owner!')
.setColor('RANDOM')
            return await interaction.reply({embeds: [GuildError]})
}

const dmEmbed = new MessageEmbed()
.setTitle('You were kicked')
.setDescription(`You were kicked from MrMoney support:

Responsible Moderator: ${interaction.user.username}

Reason: ${reason}
`)
.setColor('RANDOM')
user.send({embeds: [dmEmbed]}).then(()=>

user.kick(`${reason}`)
).catch(err => user.kick())

const mutedEmbed = new MessageEmbed()
.setTitle('User has been kicked')
.setDescription(`

User has been kicked:

User: ${user.id}

Reason: ${reason}

Responsible Moderator: ${interaction.user.username} `)
.setColor('RANDOM')
        await  interaction.reply({embeds: [mutedEmbed]})
        
        } 
    }
}
