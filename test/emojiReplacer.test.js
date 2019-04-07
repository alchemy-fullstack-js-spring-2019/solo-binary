const emojiReplacer = require('../lib/emojiReplacer');

describe('emojiReplacer', () => {
  it('replaces emoji in string with another emoji', () => {
    const expected = Buffer.from('Oh 🙃 Hello 🙃').toString();
    const input = [Buffer.from('Oh 😁 Hello 😁'), '😁', '🙃'];
    const result = emojiReplacer(...input).toString();

    expect(result).toEqual(expected);
  });
});
