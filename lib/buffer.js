const buf = Buffer.alloc(8);

let buffed = [
  104, 105, 32, 116, 104, 101, 114, 101
];

var i = 0;

buffed.forEach((number) => {
  buf.writeInt8(number, i);
  i++;
});
const smile = Buffer.from([0xF0, 0x9F, 0x8C, 0xAD]);
console.log(smile.toString());

console.log(buf.toString());
console.log(buffed.map(() => 104).toString());



console.log(smile.toString());
