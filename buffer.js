const buf1 = Buffer.alloc(12);

console.log('empty buffer', buf1);
//buf.writeInt8(104, offset)
//Hello World!
buf1.writeInt8(72, 0); // H
buf1.writeInt8(101, 1); // e
buf1.writeInt8(108, 2); // l
buf1.writeInt8(108, 3); // l
buf1.writeInt8(111, 4); // o
buf1.writeInt8(32, 5); // 
buf1.writeInt8(87, 6); // W
buf1.writeInt8(111, 7); // o
buf1.writeInt8(114, 8); // r
buf1.writeInt8(108, 9); // l
buf1.writeInt8(100, 10); // d
buf1.writeInt8(33, 11); // !

console.log('Hello World!', buf1);
console.log(buf1.toString());

const test = 'Marty loves Purple';
const buf2 = Buffer.from(test);
console.log('from string', buf2);
console.log('from string.toString', buf2.toString());
const buf3 = buf2.map(byte => {
  byte = 104;
  return byte;
});
console.log('map buffer to 104', buf3);
console.log('mapped toString', buf3.toString());

