const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChatInputCommandInteraction,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("webm")
    .setDescription("Videos que se mueven")
    .addSubcommand((options) => options.setName("sus").setDescription("sus?"))
    .addSubcommand((options) =>
      options
        .setName("brainpower")
        .setDescription("O-oooooooooo AAAAE-A-A-I-A-U")
    )
    .addSubcommand((options) =>
      options.setName("piston").setDescription("Mira como se mueve")
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    const sub = interaction.options.getSubcommand();
    switch (sub) {
      case "sus":
        {
          interaction.reply({
            content:
              "https://cdn.discordapp.com/attachments/887689631204802590/1002655825711611914/sus.webm",
          });
        }
        break;
      case "brainpower":
        {
          interaction.reply({
            content:
              "https://cdn.discordapp.com/attachments/709311691569233972/1002823367776272426/coloride.webm",
          });
        }
        break;
      case "piston":
        {
          interaction.reply({
            content:
              "https://media.discordapp.net/attachments/977697652147892304/1003375387176345690/piston.webm",
          });
        }
        break;
    }
  },
};
