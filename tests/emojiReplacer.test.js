const emojiReplacer = require('../lib/emojiReplacer');

describe('emoji replacer', () => {
    it('replaces smile with eggplant', () => {
        const message = '😁 🍾 😁 hi there 😁';
        const bufferMsg = Buffer.from(message);
        emojiReplacer(bufferMsg, '😁', '🍆');
        const newMessage = bufferMsg.toString();
        expect(newMessage).toBe('🍆 🍾 🍆 hi there 🍆');
    });
});
