module.exports = {
    name: 'play',
    description: 'Plays audio or music via youtube',
    async execute(message){
        const ytdl = require('ytdl-core-discord');

        const args = message.content.split(' ');
        const connection = await message.member.voice.channel.join();
        connection.play(await ytdl(args[1]), { type: 'opus' });
    }
}