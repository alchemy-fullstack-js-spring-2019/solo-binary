const emojiReplacer = require('../emojiReplacer');

describe('emoji replacer', () => {
  it('tests if emoji is replaced', () => {
    const buf = Buffer.from('I 😁 love 😁 emojis');
    const emoji = '😁';
    const replaceWithEmoji = '😜';
    expect(emojiReplacer(buf, emoji, replaceWithEmoji)).toEqual('I 😜 love 😜 emojis');
  });
});
