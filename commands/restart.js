let {MessageEmbed} = require('discord.js')

module.exports = {
  name: 'restart',
  description: 'restart'
}

module.exports.run = async(client, message, args) => {
  let msg = await message.channel.send(`Restarting...`)
  client.destroy()
  process.exit()
  client.login('ODAyMDk3NjE5MDUyMTM0NDMy.YAqRng.sTDrU26VlhXUxRzbbIWaQmj_UNk')
  
  setTimeout(() => {
    message.edit(`Successfully Restarted This Bot`)
  }, 1500)
}