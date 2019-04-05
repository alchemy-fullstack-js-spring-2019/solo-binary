const LetterEmitter = require('../lib/LetterEmitter');

describe('LETTER EMITTER', () => {
  
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('splits a string and emits an event for each letter', () => {
    const string = 'scooby';
    const mock = jest.fn();
    
    letterEmitter.on('letter', mock);

    letterEmitter.on('end', (done) => {
      // emit occurs for length of string
      expect(mock).toHaveBeenCalledTimes(string.length);
      done();
    });
    letterEmitter.read(string);
  });


});
