const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");
module.exports = {
  name: 'meme',
  description: 'meme go brrr',
  async execute(message, args) {
    const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
const client = require('discord.js')
        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
  }
}