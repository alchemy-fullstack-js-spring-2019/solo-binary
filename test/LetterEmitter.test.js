const LetterEmitter = require('../lib/LetterEmitter');

describe('LetterEmitter tests', () => {
  let le;
  beforeEach(() => {
    le = new LetterEmitter();
  });

  it('splits a string and emits an event for each letter', done => {
    const mock = jest.fn();
    
    const str = 'test';
    le.on('letter', letter => {
      mock();
      expect(letter.letter).toEqual(str[letter.offset]);
    });

    le.once('end', () => {
      expect(mock).toHaveBeenCalledTimes(str.length);
      done();
    });
    
    le.read(str);
  });
});
