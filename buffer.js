const buff = Buffer.alloc(9);
buff.writeInt8(72, 0)
buff.writeInt8(105, 1)
buff.writeInt8(32, 2)
buff.writeInt8(84, 3)
buff.writeInt8(104, 4)
buff.writeInt8(101, 5)
buff.writeInt8(114, 6)
buff.writeInt8(101, 7)
buff.writeInt8(33, 8)

console.log('buff 1', buff.toString());


buff2 = Buffer.from('This part of coding is at least marginally sexy');

console.log('buff 2', buff2);
console.log('buff2 string', buff2.toString());

const smile = Buffer.from([0xF0, 0x9F, 0x8C, 0xAD]).toString();
console.log(smile);

const buf = Buffer.from()

emojiReplacer(buf, )

function emojiReplacer(buf, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWIthEmoji);
}