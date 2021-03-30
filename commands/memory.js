let {MessageEmbed} = require('discord.js')
module.exports = {
  name: 'memory',
  description: 'check bot\'s memory',
  aliases: ['memo']
}

module.exports.run = async (bot, message, args) => {
  const Embed = new MessageEmbed()
            .setTitle(`:cd:Memory Usage`)
            .setColor('RANDOM')
            .addFields(
                { name: "Memory Usage: ", value: `${(process.memoryUsage().heapUsed / 540 / 135).toFixed(2)} MB`},
            )

        message.channel.send(Embed)
  console.log(process.memoryUsage())
}