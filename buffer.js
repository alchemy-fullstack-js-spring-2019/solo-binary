const emptyBuffer = Buffer.alloc(10);

emptyBuffer.writeInt8(0x68, 0);
emptyBuffer.writeInt8(0x69, 1);
emptyBuffer.writeInt8(0x20, 2);
emptyBuffer.writeInt8(0x74, 3);
emptyBuffer.writeInt8(0x68, 4);
emptyBuffer.writeInt8(0x65, 5);
emptyBuffer.writeInt8(0x72, 6);
emptyBuffer.writeInt8(0x65, 7);
  
// console.log(emptyBuffer.toString());

const buffFromStr = Buffer.from('hello world');

// console.log(buffFromStr.toString());

let mapBuff = Buffer.alloc(buffFromStr.length);

mapBuff = buffFromStr.map(changeTo104);

// console.log(mapBuff.toString());

function changeTo104() {
  return  104;
}

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);

// console.log(smile);
// console.log(smile.toString());

const buff = Buffer.from('hi 😁 there 😁');

emojiReplacer(buff, '😁', '😂');

console.log(buff.toString());

// orig [0xF0, 0x9F, 0x98, 0x81]
// new [0xF0, 0x9F, 0x98, 0x82]

function emojiReplacer(buffer, emoji, replaceWithEmoji) {
  // [0xF09F9881]
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  // [0xF09F9882]
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

  // iterates through the buffer
  // for(let i = 0; i + 4 < buffer.length; i++) {
  //   console.log(i, buffer.length);
  //   // looks for emoji
  //   const potentialEmoji = buffer.readUInt32BE(i);
  //   if(potentialEmoji === emojiCharCode) {
  //     // when it finds, replaces with replaceWithEmoji
  //     buffer.writeUInt16BE(replaceEmojiCharCode, i);
  //   }
  // }

  return buffer;

}
