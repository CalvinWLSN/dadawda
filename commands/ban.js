module.exports = {
  name: 'ban',
  description: 'Ban an members'
}

module.exports.run = async(bot, message, args) => {
 var perm = message.member.hasPermission('BAN_MEMBERS');
                if(!perm) return message.channel.send("You Don't have permission `BAN_MEMBERS`");
                    const userBan = message.mentions.users.first();

                    if(userBan) {
                        const memberBan = message.guild.member(userBan);

                        if(memberBan) {
                            memberBan.ban({
                                reason: 'The Hammer Has Been Spoken'
                            }).then(() => {
                                message.channel.send(`${userBan.tag} Have been banned`);
                            }).catch(console.error);
                        } else{
                            message.channel.send("The User Not Available");
                        }
                    } else{
                        message.channel.send("Mention The User")
                    }
}