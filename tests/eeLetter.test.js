const LetterEmitter = require('../eeLetter');

describe('letter emitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });
  it('splits a string and emits an event for each letter', done => {
    let counter = jest.fn();
    const str = 'Hi there';
    letterEmitter.on('letter', counter);
    letterEmitter.once('end', () => { 
      expect(counter).toHaveBeenCalledTimes(str.length);
      done(); 
    });
    letterEmitter.read(str);
  });
});
