const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("purge messages")
    .addIntegerOption(option =>
        option
        .setName("amount")
        .setDescription("amount you want to delete")
        .setRequired(true)
    ),
cooldowns: new Set(),
cooldown: 5,
    async execute(interaction) {

const amount = interaction.options.getInteger("amount")


        if(!interaction.member.permissions.has("MANAGE_MESSAGES")) {
            return await interaction.reply("You are missing the `MANAGE_MESSAGES` permission.")
        } 


if(amount <= 0){

const amountError = new MessageEmbed()
.setTitle('Amount Error')
.setDescription('You cant delete an amount that is 0 or less then 0')
.setColor('RANDOM')
return await interaction.reply({embeds: [amountError]})

}

if(amount > 100){
return interaction.reply({content: "Cannot delete more then 100 Messages...", ephemeral: true})
}

interaction.channel.bulkDelete(amount, true)
const purgeEmbed = new MessageEmbed()
.setTitle('Purging..')
.setDescription(`
Messages have been deleted:

Amount: ${amount}

Responsible Moderator: ${interaction.user.username} `)
.setColor('RANDOM')
        await interaction.reply({embeds: [purgeEmbed]})
    }
}
