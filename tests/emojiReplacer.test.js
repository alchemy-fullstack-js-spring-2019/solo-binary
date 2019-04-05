const emojiReplacer = require('../lib/emojiReplacer');

describe('it replaces an emoji with another emoji', () => {
    it('replaces an emoji in a buffer with a different emoji', () => {
        const emoji = '😃';

        const buf = Buffer.from(emoji);

        const replaceWithEmoji = '😍';

        expect(emojiReplacer(buf, emoji, replaceWithEmoji)).toEqual('😍');
    });
});
