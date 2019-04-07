const buffy = Buffer.from('hello 😁 there 😋');

emojiReplacer(buffy, '😂', '😂');


function emojiReplacer(buffy, emoji, replaceEmoji) {
  const emojiCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCode = Buffer.from(replaceEmoji).readUInt32BE();

  for(let i = 0; i + 3 < buffy.length; i++) {
    const possibleEmoji = buffy.readUInt32BE(i);
    if(possibleEmoji === emojiCode) {
      buffy.writeUInt32BE(replaceEmojiCode, i);
    }
  }
  return buffy;
}

