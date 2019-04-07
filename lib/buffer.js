/* eslint-disable no-console */
const test1 = Buffer.alloc(7);
console.log(test1);

const test2 = Buffer.from('Hello World!');
console.log(test2);

test1.write('Wo', 0);
test1.write('rld', 1);
test1.write('1 23', 5);
test1.writeInt8(-1, 6);
console.log(test1.toString());
console.log(test1.toJSON());
console.log('test1', test1);
console.log(test1.readInt8(0));
console.log(test1.readInt8(1));
console.log(test1.readInt8(2));
console.log(test1.readInt8(3));
console.log(test1.readInt8(4));
console.log('Int', test1.readInt8(6));
console.log('UInt', test1.readUInt8(6));
console.log('16BE', test1.readUInt16BE(0));
console.log('16LE', test1.readUInt16LE(0));
console.log('32BE', test1.readUInt32BE(0));
console.log('32LE', test1.readUInt32LE(0));

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log(smile.toJSON());

const ohOk = Buffer.from('🙃');
console.log(ohOk);
