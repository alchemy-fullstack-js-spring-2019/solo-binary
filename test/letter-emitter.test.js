const LetterEmitter = require('../lib/LetterEmitter.js');

describe('letterEmitter', () => {
  let letterEmitter = null;
  
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('print each letter', (done) => {
    const str = 'read this';
    const letterMockHandler = jest.fn();

    letterEmitter.on('letter', letterMockHandler);
    
    letterEmitter.once('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(9);
      [...str].forEach((letter, offset) => {
        expect(letterMockHandler).toHaveBeenCalledWith({
          letter,
          offset
        });
      });
      done();
    });
    
    letterEmitter.read(str);
  });
});
