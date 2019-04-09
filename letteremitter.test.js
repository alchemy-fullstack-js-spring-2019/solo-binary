const LetterEmitter = require('./letteremitter');

describe('letter emitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('splits a string and emits event before each letter', done => {
    const str = 'Hi how are you?';
    const pattern = /[a-z]/i;
    const letterMockHandler = jest.fn();

    letterEmitter.on('letter', letterMockHandler);

    letterEmitter.once('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(11);
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
