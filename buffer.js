//hi there
const buf = Buffer.alloc(10);
console.log('buf test', buf);

buf.writeInt8(0x68, 0);
buf.writeInt8(0x69, 1);
buf.writeInt8(0x20, 2);
buf.writeInt8(0x74, 3);
buf.writeInt8(0x68, 4);
buf.writeInt8(0x65, 5);
buf.writeInt8(0x72, 6);
buf.writeInt8(0x65, 7);


//filledBuff <Buffer 4d 61 6c>

const filledBuff = Buffer.alloc(3, 'Mal');
console.log('filledBuff', filledBuff);

//const stuff = buf.writeInt8();

console.log(buf.toString());
