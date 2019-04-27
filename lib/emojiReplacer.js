module.exports = function emojiReplacer(buffer, oldEmoji, newEmoji) {
  const oldEmojiCharCode = Buffer.from(oldEmoji).readUInt32BE(0);
  const newEmojiCharCode = Buffer.from(newEmoji).readUInt32BE(0);

  for(let i = 0; i < buffer.length - 3; i++) {
    const bufferSegment = buffer.readUInt32BE(i);
    if(bufferSegment === oldEmojiCharCode) buffer.writeUInt32BE(newEmojiCharCode, i);
  }
  return buffer;
};
