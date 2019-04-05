const buf = Buffer.alloc(8);

buf.writeInt8(104, 0);
buf.writeInt8(105, 1);
buf.writeInt8(32, 2);
buf.writeInt8(116, 3);
buf.writeInt8(104, 4);
buf.writeInt8(101, 5);
buf.writeInt8(114, 6);
buf.writeInt8(101, 7);

console.log(buf.toString());

const mapBuf = buf.map(x => 104);

console.log(mapBuf);
console.log(mapBuf.toString());

const curly = Buffer.alloc(5);

curly.writeInt8(0x63, 0);
curly.writeInt8(117, 1);
curly.writeInt8(0b1110010, 2);
curly.writeInt8(0x6C, 3);
curly.writeInt8(0x79, 4);

console.log(curly);
console.log(curly.toString());

function emojiReplacer(buffer, emoji, replaceWithEmoji) {
    const emojiCharCode = Buffer.from(emoji).readUInt32BE();
    const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

    for(let i = 0; i < buf.length; i++) {
        buf.readUInt32BE();
    }
}

module.exports = emojiReplacer;

const charCode = [0xF0, 0x9F, 0x98, 0x82].reduce((acc, n) => acc + n);

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
smile.writeInt32BE




