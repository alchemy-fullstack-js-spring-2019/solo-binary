const { LetterEmitter } = require('../lib/letterEmitter.js');

describe('letterEmitter', () => {
  let letterEmitter = null;
  
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('print each letter', (done) => {
    const str = 'hi There';
    const letterMockHandler = jest.fn();

    letterEmitter.on('letter', letterMockHandler);
    
    letterEmitter.once('end', () => {
      expect(letterMockHandler).toHaveBeenCalledTimes(8);
      [...str].forEach((letter, offset) => {
        expect(letterMockHandler).toHaveBeenCalledWith({
          letter,
          offset
        });
      });
      done();
    });

    letterEmitter.readstr(str);
  });
});
