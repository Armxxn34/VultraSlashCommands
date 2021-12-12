const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const config = require("./config.json");
const path = require("path");
const fs = require("fs");

const rest = new REST({ version: "9" }).setToken(config.token);

(async () => {
  const commands = [];
  for (const file of fs
    .readdirSync(path.join(__dirname, "./commands"))
    .filter((commandFile) => commandFile.endsWith(".js"))) {
    const commandFile = require(path.join(__dirname, "./commands/" + file));
    if (commandFile.data)
      commands.push(require(path.join(__dirname, "./commands/" + file)).data);
  }

  try {
    const applicationCommands = commands.map((command) => command.toJSON());

    await rest.put(
      Routes.applicationCommands(
        config.clientID,
      ),
      { body: applicationCommands }
    );

    console.log("Successfully registered application commands.");
  } catch (err) {
    console.error(err);
  }
})();
