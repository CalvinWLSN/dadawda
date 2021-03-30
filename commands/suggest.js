module.exports = {
  name: 'suggest',
  description: 'suggest a command'
}

module.exports.run = async(client, message, args) => {
  message.channel.send('Your suggestion has been filled to the staff team. Thank you for your suggestion!')
}