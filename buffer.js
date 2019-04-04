const buf = Buffer.alloc(8);

buf.writeInt8(72, 0);
buf.writeInt8(105, 1);
buf.writeInt8(32, 2);
buf.writeInt8(116, 3);
buf.writeInt8(104, 4);
buf.writeInt8(101, 5);
buf.writeInt8(114, 6);
buf.writeInt8(101, 7);

console.log(buf.toString());

const howdy = Buffer.alloc(14);

howdy.writeInt8(72, 0);
howdy.writeInt8(111, 1);
howdy.writeInt8(119, 2);
howdy.writeInt8(100, 3);
howdy.writeInt8(121, 4);
howdy.writeInt8(32, 5);
howdy.writeInt8(112, 6);
howdy.writeInt8(97, 7);
howdy.writeInt8(114, 8);
howdy.writeInt8(116, 9);
howdy.writeInt8(110, 10);
howdy.writeInt8(101, 11);
howdy.writeInt8(114, 12);
howdy.writeInt8(33, 13);

console.log(howdy.toString());
