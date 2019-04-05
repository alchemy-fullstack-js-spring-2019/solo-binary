const buf = Buffer.alloc(8);

let hellabuff = ([0xF0, 0x9F, 0x98, 0x82]).readUInt32BE();

const smile2 = Buffer.from([0xF0, 0x98, 0x81]);

const uhuh = Buffer.from([0xF0, 0x9F, 0x8C, 0xAD]);

const ugh = new Buffer(asdffdsa,ads ,fdsa, fdsakfsa)

buf.writeInt8(38, 2);
buf.writeInt8(0x68, 3);
buf.writeInt8(0x68, 4);
buf.writeInt8(0x68, 5);

console.log(uhuh);

const buf = Buffer.from('h1 😥');
emojiReplacer(buf, 😥);
console.log()

function emojiReplacer(buf, emoji, replacewithEmoji) {
    const emojiCharCode = Buffer.from(emoji).readUInt32BE();
    const replaceEmojiCharCode = Buffer.from(replacewithEmoji).readUInt32BE(    )

}