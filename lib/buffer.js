const bufferLength10 = Buffer.alloc(8);

bufferLength10.writeInt8(0x68, 0);
bufferLength10.writeInt8(0x69, 1);
bufferLength10.writeInt8(0x20, 2);
console.log(bufferLength10.toString());

const  bufferString = Buffer.from('heeeey');
console.log(bufferString.toString());

const bufferMap = Buffer.from('whatsup').map(() => 104);
console.log(bufferMap);

