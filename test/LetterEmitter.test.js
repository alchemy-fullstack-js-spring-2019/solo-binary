const { LetterEmitter } = require('../LetterEmitter');

let letterEmitter = null;

describe('LetterEmitter tests', () => {
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('read splits a string and emits an event for each letter', done => {
    const string = 'This string';
    let callbackCount = 0;

    const mockCount = jest.fn(data => {
      expect(data.offset).toBe(callbackCount);
      expect(data.letter).toBe([...string][callbackCount]);
      callbackCount++;
    });

    letterEmitter.on('letter', mockCount);
    
    letterEmitter.once('done', () => {
      expect(callbackCount).toBe(string.length);
      done();
    });
    
    letterEmitter.read(string);
  });
});
