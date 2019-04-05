const filledBuff = Buffer.alloc(5, 'Cheri');
console.log('filledBuff', filledBuff);

const buf = Buffer.alloc(5);
buf.writeInt8(0x43, 0);
buf.writeInt8(0x68, 1);
buf.writeInt8(0x65, 2);
buf.writeInt8(0x72, 3);
buf.writeInt8(0x69, 4);

console.log(buf.toString());

console.log('from', Buffer.from('hey there'));

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x90])
console.log(smile.toString());


const buf = Buffer.from()
function emojiReplacer(buf, emoji, replaceWithEmoji) {
  //
}
