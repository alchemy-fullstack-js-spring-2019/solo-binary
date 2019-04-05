const LetterEmitter = require('./eeLetter.js');

describe('letter emitter', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });
  it('splits a string and emits an event for each letter', done => {
    letterEmitter.on('letter', letter => {

    });

    letterEmitter.once('end', () => { done(); });
  });
});
