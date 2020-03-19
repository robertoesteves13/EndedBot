module.exports = {
    name: 'join',
    description: 'Joins a voice chat',
    async execute(message){
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
        }
    }
}