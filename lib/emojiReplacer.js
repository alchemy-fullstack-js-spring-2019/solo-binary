//\xF0\x9F\x98\x8D

function emojiReplacer(buffer, emoji, replaceWithEmoji) {
    const emojiCharCode = Buffer.from(emoji).readUInt32BE();
    const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

    for(let i = 0; i + 4 < buffer.length; i++) {
        const potentialEmoji = buffer.readUInt32BE(i);
        if(potentialEmoji === emojiCharCode) {
            buffer.writeUInt32BE(replaceEmojiCharCode, i);
        }
    }
}

module.exports = emojiReplacer;
