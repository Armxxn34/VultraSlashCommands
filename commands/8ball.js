// Defining Random Stuff
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

// All the command info will be listed here
module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Ask the 8ball anything u want!")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("question you wanna ask ")
        .setRequired(true)
    ),
cooldowns : new Set(),
cooldown : 5, 
// Executing the interaction and defining nessessery stuff
  async execute(interaction) {
   const say = interaction.options.getString("question");

      let answers = [
      "As I see it, yes,",
      "Ask again later,",
      "Better not tell you now,",
      "Cannot predict now,",
      "Concentrate and ask again,",
      "It is certain,",
      "Don’t count on it,",
      "What, NO!!",
      "Most likely,",
      "My reply is no,",
      "My sources say yes,",
      "Outlook not so good,",
      "Outlook good,",
      "Reply hazy, try again,",
      "You may rely on it,",
      "Of course not!",
      "Without a doubt,",
      "Signs point to no",
      "Never",
      "No",
      "Yes",
     
    ];

 let Result = answers[Math.floor(Math.random() * answers.length)];

// Entirely new embed
      const balEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`The 8ball!`)
        .setDescription(`${interaction.user.username} Asks: ${say}

Answer: ${Result}`)
        .setTimestamp();
        
      await interaction.reply({ embeds: [balEmbed] });
  }
}
