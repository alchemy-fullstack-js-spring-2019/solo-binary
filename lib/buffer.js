const buf = Buffer.alloc(5);

buf.writeInt8(0x43, 0);
buf.writeInt8(0x6F, 1);
buf.writeInt8(0x6F, 2);
buf.writeInt8(0x6C, 3);
buf.writeInt8(0x2E, 4);

console.log(buf.toString());

// Buffer.from();


