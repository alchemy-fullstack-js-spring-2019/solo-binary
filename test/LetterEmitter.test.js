const { LetterEmitter } = require('../lib/LetterEmitter');

describe('LETTER EMITTER', () => {
  
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('splits a string and emits an event for each letter', () => {
    const string = 'scooby';
    const mock = jest.fn();
    
    letterEmitter.on('letter', mock);

    letterEmitter.once('end', () => {
      expect(mock).toHaveBeenCalledTimes(string.length);
    });
    letterEmitter.read(string);
  });


});
