const LetterEmitter = require('./LetterEmitter');
//const ee = new LetterEmitter();

describe('letter emitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });
  it('splits a string and emits 1 event per letter', () => {
    const str = 'hiThere';
    const letterMockHandler = jest.fn();

    letterEmitter.on('letter', letterMockHandler);

    letterEmitter.on('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(str.length),
      [...str].forEach((letter, offset) => {
        expect(letterMockHandler).toHaveBeenCalledWith({
          letter,
          offset
        });
      }
    })
    letterEmitter.read(str);
  });
});
