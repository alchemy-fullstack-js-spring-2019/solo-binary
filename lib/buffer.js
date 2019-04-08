const buffer = Buffer.alloc(10);
const bufferEmily = Buffer.alloc(10, 'emily');
/* eslint-disable-next-line */
console.log(buffer, bufferEmily);
/* eslint-disable-next-line */
console.log(bufferEmily.toString());

const buffer2 = Buffer.from('super awesome amazing');
/* eslint-disable-next-line */
console.log(buffer2);
/* eslint-disable-next-line */
console.log(buffer2.toString());

const mappedBuffer = buffer2.map((() => 104));
/* eslint-disable-next-line */
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
/* eslint-disable-next-line */
console.log(bufbuf);
/* eslint-disable-next-line */
console.log(bufbuf.toString());
/* eslint-disable-next-line */
console.log(Buffer.from('hi there').map(()=> 104));

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
/* eslint-disable-next-line */
console.log(smile.toString());

const cry = Buffer.from([0xF0, 0x9F, 0x98, 0xAD]);
/* eslint-disable-next-line */
console.log(cry.toString());


cry.writeUInt32BE(smile, 0);
/* eslint-disable-next-line */
console.log(cry.toString());
