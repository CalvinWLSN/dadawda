module.exports = {
  name: 'verify',
  description: 'verify'
}

let createToken = require('random-token')

let djs = require('discord.js')

module.exports.run = async(client, message, args) => {
  let roleId = '819526287692660776'
  
  let db = client.db
  
  let isVerify = await db.get(`isVerify.${message.author.id}`)
  if (isVerify === true) return message.channel.send(`Your Already verified!`).then(x => x.delete({ timeout: 5000 }))
    let filter = m => m.author.id === message.author.id
    let text = await createToken(5)
    let attachment = new djs.MessageAttachment(`https://dynamic.brandcrowd.com/asset/logo/afc75035-bfee-4290-b1da-d227b78f7076/logo?v=1&text=${text}`, `Verification.png`)
    message.channel.send(`Follow Words Bellow if you not an bots!`, attachment).then(x => x.delete({ timeout: 20000 }))
    let collector = new djs.MessageCollector(message.channel, filter, { max: 1, time: 20000 })
    collector.on('collect', async msg => {
      if (msg.content === text) {
        db.set(`isVerify.${message.author.id}`, true)
        msg.author.send(`Successfully Verified your accounts!`)
        msg.member.roles.add(roleId)
        msg.delete()
      } else {
        msg.delete()
        return message.channel.send(`Wrong!, Please try again`).then(x =>x.delete({ timeout: 5000 }))
      }
    })
}