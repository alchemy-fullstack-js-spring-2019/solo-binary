//##  HI THERE BUFFER
const buff = Buffer.alloc(12);

//buf.writeInt8(content, indexToPutIn)
buff.writeInt8(72, 0);  // H
buff.writeInt8(101, 1); // e
buff.writeInt8(108, 2); // l
buff.writeInt8(108, 3); // l
buff.writeInt8(111, 4); // o
buff.writeInt8(32, 5);  //
buff.writeInt8(84, 6);  // T
buff.writeInt8(104, 7); // h
buff.writeInt8(101, 8); // e
buff.writeInt8(114, 9); // r
buff.writeInt8(101, 10); // e
buff.writeInt8(33, 11);  // !

console.log(buff);

// output: <Buffer 48 66 6c 6c 6f 20 54 68 66 72 66 21>
// Hello There! (in Binary)

console.log(buff.toString());

// output: "Hello There!"

// ## BUFFER FROM A STRING

const buffy = Buffer.from('Buffer The Vampire Slougher');
console.log(buffy.toString());

// ## BUFFER FROM HEX CODES

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log(smile);

// ## EMOJI REPLACER

const buffish = Buffer.from('hi EMOJI-1 there');

function emojiReplacer(buffish, emoji = [0xF0, 0x9F, 0x98, 0x81], replaceWithNewEmoji = [0xF0, 0x9F, 0x98, 0x85]) {
  //let emoji = ;
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithNewEmoji).readUInt32BE();

  for(let i = 0; i < buffish.length; i++) {
    buffish.readUInt32BE(i);
  }
  console.log(emojiCharCode);
  return replaceEmojiCharCode;
}

console.log(emojiReplacer);

