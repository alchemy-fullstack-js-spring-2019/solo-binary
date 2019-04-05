const LetterEmitter = require('../lib/LetterEmitter');

describe('LETTER EMITTER', () => {
  
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('splits a string and emits an event for each letter', () => {
    expect(letterEmitter.read('junk')).toEqual('junk');
  });
});
