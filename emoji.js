const emoji = Buffer.from([0xF0, 0x9F, 0x92, 0xA8]).readUInt32BE();
console.log(emoji);

const poo = Buffer.from([0xF0, 0x9F, 0x92, 0xA9]);
console.log(poo.toString());
poo.writeUInt32BE(emoji, 0);
console.log(poo.toString());

function emojiReplacer(buf, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

  for(let i = 0; i < buf.length; i++) {
    buf.readUInt32BE(i);
  }
}
