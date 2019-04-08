const buffer = Buffer.alloc(10);
const bufferEmily = Buffer.alloc(10, 'emily');
console.log(buffer, bufferEmily);
console.log(bufferEmily.toString());

const buffer2 = Buffer.from('super awesome amazing');
console.log(buffer2);
console.log(buffer2.toString());

const mappedBuffer = buffer2.map((() => 104));
console.log(mappedBuffer);

const bufbuf = Buffer.alloc(8);
bufbuf.writeInt8(0x68, 0);
bufbuf.writeInt8(0x69, 1);
bufbuf.writeInt8(0x20, 2);
bufbuf.writeInt8(0x74, 3);
bufbuf.writeInt8(0x68, 4);
bufbuf.writeInt8(0x65, 5);
bufbuf.writeInt8(0x72, 6);
bufbuf.writeInt8(0x65, 7);
console.log(bufbuf);
console.log(bufbuf.toString());
console.log(Buffer.from('hi there').map(()=> 104));

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log(smile.toString());

const cry = Buffer.from([0xF0, 0x9F, 0x98, 0xAD]);
console.log(cry.toString());


cry.writeUInt32BE(smile, 0);
console.log(cry.toString());
