module.exports = {
  name: 'kick',
  description: 'Kick an member',
  aliases: ['k']
}

module.exports.run = async(bot, message, args) => {
  if(message.member.hasPermission('KICK_MEMBERS')) { 
                const userKick = message.mentions.users.first();

                if(userKick) {
                    const memberKick = message.guild.member(userKick);

                    if(memberKick) {
                        memberKick.kick("You have been kicked from this server").then(() => {
                            message.channel.bulkDelete(1);
                            message.reply(`${userKick.tag} have been kicked`);
                        }).catch(err => {
                            message.channel.bulkDelete(1);
                            message.reply('This member can\'t kicked');
                            console.log(err);
                        });
                    }
                } else {
                    message.channel.bulkDelete(1);
                    message.reply('Mention The User')
                }
            } else{
                message.channel.bulkDelete(1);
                return message.channel.send('You Don\'t have permission `KICK_MEMBERS`');
            }
}