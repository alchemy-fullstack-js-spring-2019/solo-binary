const test = Buffer.alloc(7);
console.log(1, test);

test.writeInt8(0x48, 0);
test.writeInt8(0x65, 1);
test.writeInt8(0x6c, 2);
test.writeInt8(0x6c, 3);
test.writeInt8(0x6f, 4);
test.writeInt8(0x20, 5);
test.writeInt8(0x21, 6);

console.log(11, test);
console.log(12, test.toString());

const string = 'Hello !';
const test2 = Buffer.from(string)
console.log(2, test2);
console.log(3, test2.toString());

const test3 = test2.map(() => 110);
console.log(4, test3);
console.log(10, test3[1]);
console.log(5, test3.toString());

const test4 = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log(6, test4);
console.log(7, test4.toString());

const test5 = Buffer.from([240, 159, 152, 129]);
console.log(8, test5);
console.log(9, test5.toString());

const test6 = Buffer.from([240]);
console.log(test6.toString());
