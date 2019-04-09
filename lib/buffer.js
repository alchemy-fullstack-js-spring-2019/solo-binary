const buf = Buffer.from('hi 😁 to  😡');

function emojiReplacer(buffer, emoji, replaceWithEmoji) {
  const emojiCharCode  = Buffer.from (emoji).readInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readInt32BE();

  for(let i = 0; i + 4 < buffer.length; i++) {
    const newEmoji = buf.readUInt32BE(i);
    if(newEmoji === emojiCharCode) {
      buf.writeUInt32BE(replaceEmojiCharCode, i);
    }
    console.log(buffer.toString());
    return buffer;
  }
}

emojiReplacer(buf, '😡', '😁');
