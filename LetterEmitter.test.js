const letterEmitter = require('./LetterEmitter');

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new letterEmitter;
  });

  it('splits a string and emits an event for each letter', () => {
    const str = 'hiThere';
    const letterMockHandler = jest.fn();

    letterEmitter.on('letter', letterMockHandler);

  })
});
