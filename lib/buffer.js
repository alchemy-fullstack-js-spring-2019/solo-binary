// const buffer = Buffer.alloc(8);

// let spot = 0;
// buffer.map(num => {
//   num = 104;
//   buffer.writeInt8(num, spot);
//   spot++;
//   console.log(buffer);
// })


// console.log('buffer', buffer);
// console.log('buffer string', buffer.toString());

// const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);

// console.log(smile.toString());

const buf = Buffer.from('hi 😁 to  😡')

function emojiReplacer(buffer, emoji, replaceWithEmoji) {
  const emojiCharCode  =Buffer.from (emoji).readInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readInt32BE();

  for (let i = 0; i + 4 < buffer.length; i++) {
    const newEmoji = buf.readUInt32BE(i);
    if(newEmoji === emojiCharCode) {
      buf.writeUInt32BE(replaceEmojiCharCode, i);
    }
    console.log(buffer.toString());
    return buffer;
  }
}

emojiReplacer(buf, '😡', '😁');
