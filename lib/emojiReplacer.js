const buff = Buffer.from('hi 😁 there 😃');

emojiReplacer(buff, '😁', '😃');

function emojiReplacer(buffer, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

  for(let i = 0; i + 3 < buffer.length; i++) {
    const potentialEmoji = buffer.readUInt32BE(i);
    if(potentialEmoji === emojiCharCode) {
      buffer.writeUInt32BE(replaceEmojiCharCode, i);
    }
  }
  return buffer;
}
