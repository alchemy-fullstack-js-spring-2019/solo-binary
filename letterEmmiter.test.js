const LetterEmitter = require('./letterEmitter');

describe('letterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });
  it('splits a string and emits an event for each letter', done => {
    const str = 'hey there';
    const pattern = /[a-z]/i;
    const mockLetterHandler = jest.fn();
    letterEmitter.on('letter', mockLetterHandler);

    letterEmitter.once('end', () => {
      expect(mockLetterHandler).toHaveBeenCalledTimes(8);
      [...str].forEach((letter, offset) => {
        if(pattern.test(letter)) {
          expect(mockLetterHandler).toHaveBeenCalledWith({
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
