//##  HI THERE BUFFER
const buff = Buffer.alloc(12);

//Note: buf.writeInt8(content, indexToPutIn)

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
// Hello There! (in Binary).

console.log(buff.toString());

// output: "Hello There!"

// ## BUFFER FROM A STRING

const buffy = Buffer.from('Buffer The Vampire Slougher');
console.log(buffy.toString());

// # WRITE OVER BUFFER VALUES

let buffout = Buffer.from('Crawl Out Through The Fallout');
function changeIt() {
  buffout = 104;
}
console.log(buffout.map(changeIt));

// ## BUFFER FROM HEX CODES

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log(smile);

// ## EMOJI REPLACER

const buffish = Buffer.from('hi 😁 there 😁');

emojiReplacer(buffish, '😁', '😂');
console.log(buffish.toString());

[2, 3, 4, 5];
[8, 9, 1, 1];
[1, 8, 9, 1, 1, 6, 7, 8, 9];

function emojiReplacer(buffish, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

  for(let i = 0; i + 3 < buffish.length; i++) {
    const potentialEmoji = buffish.readUInt32BE(i);
    if(potentialEmoji === emojiCharCode) {
      buffish.writeUInt32BE(replaceEmojiCharCode, i);
    }
  }

  return buffish;
}

module.exports = {
  emojiReplacer
};
