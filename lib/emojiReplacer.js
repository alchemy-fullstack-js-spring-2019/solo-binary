function emojiReplacer(buf, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();
  for(let i = 0; i + 3 < buf.length; i++) {
    const potentialEmoji = buf.readUInt32BE(i);
    console.log('potential code', potentialEmoji);
    console.log('index', buf[i]);
    if(potentialEmoji === emojiCharCode) {
      buf.writeUInt32BE(replaceEmojiCharCode, i);
      return buf.toString();
    }
  }
}

module.exports = emojiReplacer;
