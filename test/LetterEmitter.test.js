const LetterEmitter = require('../lib/LetterEmitter.js');
// const { EventEmitter } = require('events');

describe('LetterEmitter Class tests', () => {
  let LE;
  beforeEach(() => {
    LE = new LetterEmitter();
  });
  it('splits a string and emits an event for each letter', done => {

    const testString = 'bananas';
    const mockCallback = jest.fn();
    LE.on('letter', mockCallback);
    
    LE.once('end', () => {
      expect(mockCallback).toHaveBeenCalledTimes(testString.length);
      [...testString].forEach((letter, offset) => {
        expect(mockCallback).toHaveBeenCalledWith({
          letter,
          offset
        });
      });

      done();
    });
    LE.read(testString);

  });
});
