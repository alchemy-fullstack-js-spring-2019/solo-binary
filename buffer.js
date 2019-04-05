const buf = Buffer.alloc(10);
console.log('init', buf);

const buff = buf.map(() => 104);
console.log('map', buff);

let x = 2;
const buffy = buf.map(() => x *= 2);
console.log('buffy', buffy);

const rebuf = Buffer.from([1, 2, 3, 4, 5, 100, 200, 300, 400, 0]);
console.log('rebuf', rebuf);

const strbuf = Buffer.from('hello');
console.log('strbuf', strbuf);
console.log('strbuf.toString()', strbuf.toString());

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log('smile', smile);
console.log('smile.toString()', smile.toString());

const emoji = Buffer.from([0xF0, 0x9F, 0x98, 0x8F]);
console.log(emoji.toString());

const aubergine = Buffer.from([0xF0, 0x9F, 0x8D, 0x86]);
console.log(aubergine.toString());

const emojis = Buffer.from('😁 🍾 😁 hi there 😁');
console.log(emojis.toString());

const emojiReplacer = require('./lib/emojiReplacer');
emojiReplacer(emojis, '😁', '🍆');
console.log(emojis.toString());
