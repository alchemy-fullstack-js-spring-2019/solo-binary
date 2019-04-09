const buf = Buffer.from('hi (emoji1) there (emoji2)');
emojiReplacer(buf, 'emoji1', 'emoji2');

function emojiReplacer(buf, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.code(replaceWithEmoji).readUInt32BE();

  for (let i = 0; i + 3 < buf.length; i++) {
    const potentialEmoji
    buf.readUInt32BE(i);
  }
}
