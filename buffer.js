const buffer = Buffer.alloc(5);
const stringBuffer = Buffer.from('I am the flying spaghetti monster');
const hello = Buffer.from([0x48, 0x45, 0x4C, 0x4C, 0x4f, 0x3F]);
const newBuffer = Buffer.alloc(6);
newBuffer.writeInt8(0x48, 0);
newBuffer.writeInt8(0x45, 1);
newBuffer.writeInt8(0x4C, 2);
newBuffer.writeInt8(0x4C, 3);
newBuffer.writeInt8(0x4F, 4);
newBuffer.writeInt8(0x21, 5);
console.log(newBuffer.toString());

console.log(stringBuffer.toString());

// eslint-disable-next-line no-unused-vars
const mapped = buffer.map(() => 63);
console.log(mapped.toString());

console.log(hello.toString());



