const buff = Buffer.alloc(8);
/*eslint-disable-next-line*/
console.log(buff);

buff.writeInt8(104, 0);
buff.writeInt8(105, 1);
buff.writeInt8(32, 2);
buff.writeInt8(116, 3);
buff.writeInt8(104, 4);
buff.writeInt8(101, 5);
buff.writeInt8(114, 6);
buff.writeInt8(101, 7);
/*eslint-disable-next-line*/
console.log(buff.toString());

const bufferFrom = Buffer.from('hi there');
/*eslint-disable-next-line*/
console.log(bufferFrom);

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x8D]);
/*eslint-disable-next-line*/
console.log(smile.toString());
