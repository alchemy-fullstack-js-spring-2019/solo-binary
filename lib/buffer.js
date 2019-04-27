const buf = Buffer.alloc(8);
buf.writeInt8(0x48, 0);
buf.writeInt8(0x69, 1);
buf.writeInt8(0x20, 2);
buf.writeInt8(0x74, 3);
buf.writeInt8(0x68, 4);
buf.writeInt8(0x65, 5);
buf.writeInt8(0x72, 6);
buf.writeInt8(0x65, 7);

console.log(buf.toString());
