const buf = Buffer.alloc(8);

buf.writeInt8(72, 0);
buf.writeInt8(105, 1);
buf.writeInt8(32, 2);
buf.writeInt8(116, 3);
buf.writeInt8(104, 4);
buf.writeInt8(0x65, 5);
buf.writeInt8(0x72, 6);
buf.writeInt8(0x65, 7);

console.log(buf.toString());
