const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {
	bot.user.setActivity("Préparer l'attaque d'une ville")
})

bot.login(process.env.BOT_TOKEN);
