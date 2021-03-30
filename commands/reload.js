const djs = require('discord.js')

module.exports = {
  name: 'reload',
  description: 'Reloades a command',
  category: 'owner',
  usage: 'reload <category> <command>',
  aliases: ['rl'],
  run: async(client, message, args) => {
    
    if(message.author.id !== "714698279149109331" && message.author.id !== '472293676542984193') return message.channel.send("This command is only for bot owners.");
    
    if(!args[0]) return message.channel.send('You must provide a command for me to reload');

    let commandName = args[0].toLowerCase();

  try { 
    if (!client.commands.get(commandName)) return message.channel.send(`Unknown Commands, Try again`) 
     client.commands.delete(commandName);
     const pull = require(`./${commandName}.js`);
     client.commands.set(commandName, pull);
    
    const embed = new djs.MessageEmbed()
 .setTitle('Reload Command')
 .setColor('BLACK')
 .setDescription(`Successfully reloaded \`${args[0].toUpperCase()}\` command`)
 
   return message.channel.send(embed);
    } catch(e) {
        return message.channel.send(`Error while reloading: \`${args[0].toUpperCase()}\` command`);
    }
    
  }
  
}