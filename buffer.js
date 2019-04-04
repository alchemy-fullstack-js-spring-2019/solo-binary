const buf = Buffer.alloc(10);

buf.writeInt8(104, 0);
buf.writeInt8(110, 3);
buf.writeInt8(113, 4);

console.log(buf.toString());
