const buf = Buffer.from('hi 😁 there 😁');

emojiReplacer(buf, '😁', '😂');
console.log(buf.toString());

function emojiReplacer(buf, emoji, replaceWithEmoji) {
    const emojiCharCode = Buffer.from(emoji).readUInt32BE();
    const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

    for(let i = 0; i + 3 < buf.length; i++){
        const potentialBuf = buf.readUInt32BE(i);
        if(potentialBuf === emojiCharCode) {
            buf.writeUInt32BE(replaceEmojiCharCode, i);
        }
    }
    return buf;
}
