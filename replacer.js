const charCode = Buffer.from([0xF0, 0x9F, 0x8C, 0xAD]);
console.log(charCode.toString());

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x8D]);
smile.writeUInt32BE(charCode, 0);
console.log(smile.toString());


// function emojiReplacer(buf, emoji, replaceWithEmoji){

// }