const buf = Buffer.alloc(10);

buf.writeInt8(0x68, 0);
buf.writeInt8(0x69, 1);
buf.writeInt8(0x20, 2);
buf.writeInt8(0x74, 3);
buf.writeInt8(0x68, 4);
buf.writeInt8(0x65, 5);
buf.writeInt8(0x72, 6);
buf.writeInt8(0x65, 7);

const fromBuf = Buffer.from('Mal');

const writeOver = buf.map(function(){});

const emoji = Buffer.from([0xF0, 0x9F, 0x98, 0x8D]);
console.log(emoji.toString());
