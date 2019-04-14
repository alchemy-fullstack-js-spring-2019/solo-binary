const buf = Buffer.from('hi 😁 there 😃');

emojiReplacer(buf, '😁', '😃');

function emojiReplacer(buffer, emoji, replacedEmoji) {
  const emojiCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCode = Buffer.from(replacedEmoji).readUInt32BE();

  for(let i = 0; i + 3 < buffer.length; i++) {
    const possEmoji = buffer.readUInt32BE(i);
    if(possEmoji === emojiCode) {
      buffer.writeUInt32BE(replaceEmojiCode, i);
    }
  }
  return buffer;
}
