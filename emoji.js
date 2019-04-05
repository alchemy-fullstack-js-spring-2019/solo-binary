const buf = Buffer.from([0x4f, 0x68, 0x20, 0x73, 0x68, 0x69, 0x74, 0x20, 0xf0, 0x9f, 0x92, 0xa8]);
const gas = Buffer.from([0xf0, 0x9f, 0x92, 0xa8]); 
// 💨
const poo = Buffer.from([0xF0, 0x9F, 0x92, 0xA9]);
// 💩

emojiReplacer(buf, gas, poo);

function emojiReplacer(buf, emoji, replacementEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replacementEmoji).readUInt32BE();
  
  for(let i = 0; i + 3 < buf.length; i++) {
    const newEmoji = buf.readUInt32BE(i);
    if(newEmoji === emojiCharCode) {
      buf.writeUInt32BE(replaceEmojiCharCode, i);
    }
  }
  
  return buf;
}

console.log(buf.toString());
