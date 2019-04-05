const LetterEmitter = require('../lib/LetterEmitter');

describe('LetterEmitter tests', () => {
  let le;
  beforeEach(() => {
    le = new LetterEmitter();
  });

  it('splits a string and emits an event for each letter', () => {
    const mock = jest.fn();
    
    const str = 'test';
    le.on('letter', letter => {
      mock();
      expect(letter.letter).toEqual(str[letter.offset]);
    });

    le.read(str);
    expect(mock).toHaveBeenCalledTimes(str.length);
  });
});
