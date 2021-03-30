let {MessageEmbed } = require('discord.js')

module.exports = {
  name: 'help',
  description: 'Show all commands',
  aliases: ['?']
}

module.exports.run = async(bot, message, args) => {
  const embed = new MessageEmbed()
  .setTitle('**Commands**')
  .setColor('RANDOM')
  .addField('**Fun:game_die:**', '`ping`')
  .addField('**Games:video_game:**')
  .addField('**Information:orange_book:**', '`invite`, `support`')
  .addField('**Images:frame_photo:**')
  .addField('**Moderation:woman_judge:**', '`kick`, `ban`')
  .addField('**Other**', '`reportuser`, `afk`, `avatar`, `cotm`, `reportuser`, `memory`, `bug`, `suggest`')
  .addField('**Awsome Addons!**')
  .addField(`**  **`, `**[Invite Me](https://discord.com/oauth2/authorize?client_id=802097619052134432&scope=bot&permissions=2147483647) | [Support Server](https://discord.gg/Ewt39jwjgk)**`)
  
  message.channel.send(embed);
}