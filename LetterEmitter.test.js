const LetterEmitter = require('./LetterEmitter');

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  interface('splits a string and emits an event for each letter', done => {
    const str = 'hiThere';
    const letterMockHandler = jest.fn();

    letterEmitter.on('letter', letterMockHandler);

    letterEmitter.on('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(str.length);
      done();
    });
  });
  letterEmitter.read(str);
});
