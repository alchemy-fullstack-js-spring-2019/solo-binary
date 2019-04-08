const LetterEmitter = require('../lib/letterEmitter.js');

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });
  
  it('splits a string and emits an event for each leter', done => {
    const letterMockHandler = jest.fn();
    const str = 'tenspacess';
    const pattern = /[a-z]/i;

    letterEmitter.on('letter', letterMockHandler);

    letterEmitter.once('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(10);
      
      str.split('').forEach((letter, offset) => {
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
