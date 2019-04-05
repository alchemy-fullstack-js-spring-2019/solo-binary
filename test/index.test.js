const emojiReplacer = require('../lib/index');

describe('emojiReplacer', () => {
    it('replaces an emoji', () => {
        const oldBuffer = Buffer.alloc(7, '🍆alien🍆');
        const expectedBuffer = Buffer.alloc(7, 'alien👽')
        const returnedBuffer = emojiReplacer(oldBuffer, 👽, 🍆);
        expect(returnedBuffer).toEqual(oldBuffer);
    });
});
