const buff = Buffer.alloc(8);
console.log(buff);

// hi there
buff.writeInt8(104, 0);
buff.writeInt8(105, 1);
buff.writeInt8(32, 2);
buff.writeInt8(116, 3);
buff.writeInt8(104, 4);
buff.writeInt8(101, 5);
buff.writeInt8(114, 6);
buff.writeInt8(101, 7);
console.log(buff.toString());
