let {MessageEmbed } = require('discord.js')

module.exports = {
  name: 'invite',
  description: 'Invite the bot'
}

module.exports.run = async(bot, message, args) => {
  const embed = new MessageEmbed()
    .setTitle('**Invite links**')
    .addField(`**  **`, `[Invite link (recommended)](https://discord.com/oauth2/authorize?client_id=802097619052134432&scope=bot&permissions=2147483647)`)
    .addField(`**  **`, `[Invite link (admin)](https://discord.com/oauth2/authorize?client_id=802097619052134432&scope=bot&permissions=8)`)
  message.channel.send(embed)
}