const emojiReplacer = require('../lib/emojiReplacer');

describe('emojiReplacer', () => {
  it('replaces emoji in string with another emoji', () => {
    const expected = Buffer.from('Why 🙃 hello 🙃').toString();
    const input = [Buffer.from('Why 😁 hello 😁'), '😁', '🙃'];
    const result = emojiReplacer(...input).toString();

    expect(result).toEqual(expected);
  });
});
