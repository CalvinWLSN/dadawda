const {Client, MessageEmbed, Message, Collection} = require('discord.js');
const bot = new Client
const client = bot
let fetch = require('snekfetch')
let express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path')
  
const token = 'ODAyMDk3NjE5MDUyMTM0NDMy.YAqRng.sTDrU26VlhXUxRzbbIWaQmj_UNk';
var PREFIX = '!';
client.afkData = new Collection()
client.commands = new Collection()
client.db = require('quick.db')

let afk = client.afkData
let cmdFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'))
cmdFiles.forEach(fileName => {
  let cmd = require(`./commands/${fileName}`)
  client.commands.set(cmd.name, cmd)
  
})

bot.on('ready', async() => {
  console.log(`Bot Online sebagai ${bot.user.tag}!`);
  
  client.channels.cache.get('822810595451600896').send(`Bot Online sebagai ${bot.user.tag}!`)
  
  bot.user.setActivity('!help', {
      type: 'PLAYING'
  })
});

bot.on('message', message => {
  if (message.channel.id === '822810595451600896') {
    console.log(message.content)
  }
  if (afk.has(message.author.id)) {
    message.channel.send(`**${message.author.tag}** You No Longer Afk!, Afk Reason: \`${afk.get(message.author.id)}\``)
  }
  let args = message.content.substring(PREFIX.length).split(' ');
  if(!message.content.startsWith(PREFIX)) return;
  let commandsName = args.shift().toLowerCase()
  let command = client.commands.get(commandsName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandsName))
  
  try {
    command.run(bot, message, args)
    console.log(`${message.author.tag} Menggunakan Commands "${commandsName}"`)
    client.channels.cache.get('822810595451600896').send(`${message.author.tag} Menggunakan Commands "${commandsName}"`)
  } catch (err) {
    message.channel.send(`Unknown commands!, Type \`${PREFIX}help\` for help!`).then(msg => {
      msg.delete({timeout: 10000})
    })
  }
  
  switch (commandsName) {

        case 'reportbug':
            message.channel.send(':link:**http://bit.ly/3kwL37z**')
        break;
    }  
})

bot.login(token);