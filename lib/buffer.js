const buf = Buffer.alloc(8);

buf.writeInt16BE(0x68, 0);
buf.writeInt16BE(0x69, 1);
buf.writeInt16BE(0x20, 2);
buf.writeInt16BE(0x74, 3);
buf.writeInt16BE(0x68, 4);
buf.writeInt16BE(0x65, 5);
buf.writeInt16BE(0x72, 6);
buf.writeInt16BE(0x65, 7);

const buffy = Buffer.from('hi 😁 there 😍');

emojiReplacer(buffy, '😁', '😍');

function emojiReplacer(buf, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

  for(let i = 0; i + 3 < buf.length; i++) {
    const potentialEmoji = buf.readUInt32BE();
    if(potentialEmoji === emojiCharCode) {
      buf.writeUInt32BE(replaceEmojiCharCode, i);
    }
  }

  return buf;
}
