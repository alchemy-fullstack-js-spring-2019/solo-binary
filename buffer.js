// hi there
const buffy = Buffer.alloc(10);

buffy.writeInt8(0x68, 0);
buffy.writeInt8(0x69, 1);
buffy.writeInt8(0x20, 2);
buffy.writeInt8(0x74, 1);

// console.log(buffy.toString());
// console.log(buffy);


const emoji = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
// console.log(emoji.toString());
const buffEmoji = 

[0xF0, 0x9F, 0x98, 0x8B]
emojiReplacer(buffy, '😁', '😋');
console.log(buffy.tostring());

