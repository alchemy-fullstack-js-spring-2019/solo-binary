const buffer = Buffer.from('hi 😲 there 😲');

emojiReplacer(buffer, '😲', '😸');
// console.log(buffer.toString());

function emojiReplacer(buffer, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

  for(let i = 0; i + 4 < buffer.length; i++) {
    const potentialEmoji = buffer.readUInt32BE(i);
    if(potentialEmoji === emojiCharCode) {
      buffer.writeUInt32BE(replaceEmojiCharCode, i);
    }
  }
  return buffer;
}

console.log(buffer.toString());
