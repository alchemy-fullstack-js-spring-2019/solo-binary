const emojiReplacer = require('../lib/emojiReplacer');

describe('emoji replacer', () => {
  it('tests if emoji is replaced', () => {
    const buf = Buffer.from('I 😁 love 😁 emojis'); 
    
    expect(emojiReplacer(buf, '😁', '😜')).toBe('I 😜 love 😜 emojis');
  });
});
