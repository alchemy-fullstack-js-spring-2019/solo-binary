let buf;
emojiReplacer(buf, 'emoji to replace', 'replace with this emoji');

function emojiReplacer(buf, emoji, replaceWithEmoji) {
    const emojiCharCode = Buffer.from(emoji).readUInt32BE();
    const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

    for(let i = 0; i + 3 < buf.length; i++) {
        const potentialEmoji = buf.readUInt32BE(i);
        if(potentialEmoji === emojiCharCode) {
            buf.writeUInt32BE(replaceEmojiCharCode, i);
        }
    }
}
