const emojiReplacer = require('../lib/emojiReplacer');

describe('it replaces an emoji with another emoji', () => {
    it('replaces an emoji in a buffer with a different emoji', () => {
        const emoji = [0xF0, 0x9F, 0x98, 0x81];

        const buf = Buffer.from(emoji);
        console.log(buf);

        expect(emojiReplacer(buf, emoji, newEmoji)).toEqual('😍');
    });
});
