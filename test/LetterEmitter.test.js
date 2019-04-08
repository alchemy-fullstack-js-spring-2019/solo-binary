const LetterEmitter = require('../lib/LetterEmitter');

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('splits a string', done => {
    const str = 'howdy';
    const letterMockHandler = jest.fn();
    const pattern = /[a-z]/i;

    letterEmitter.on('letter', letterMockHandler);

    letterEmitter.on('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(5);
      [...str].forEach((letter, offset) => {
        if(pattern.test(letter)) {
          expect(letterMockHandler).toHaveBeenCalledWith({
            letter,
            offset
          });
        }
      });
      done();
    });

    letterEmitter.read(str);
  });
});
