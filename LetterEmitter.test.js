const LetterEmitter = require('./LetterEmitter');

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter;
  });

  it('splits a string and emits an event for each letter', () => {
    const str = 'hi There';
    const pattern = /[a-z]/i;
    const letterMockHandler = jest.fn();

    letterEmitter.on('letter', letterMockHandler);

    letterEmitter.on('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(7);
      [...str].forEach((letter, offset) => {
        if(pattern.test(letter)) {
          expect(letterMockHandler).toHaveBeenCalledWith({
            letter,
            offset
          });
        }
      });
      /*eslint-disable-next-line*/
      done();
    });

    letterEmitter.read(str);
  });
});
