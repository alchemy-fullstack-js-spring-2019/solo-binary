const buf = Buffer.alloc(10);

const newBuf = buf.map(item => item = 104);

console.log(newBuf.toString());
