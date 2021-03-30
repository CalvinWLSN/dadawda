module.exports = {
  name: 'bug',
  description: 'report bug'
}

module.exports.run = async(client, message, args) => {
  message.channel.send('Your bug report has been filled to the staff team. Thank you for reporting!')
}