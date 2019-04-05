const LetterEmitter = require('../lib/LetterEmitter');

describe('letter emitter finction', () => {
  let LetterEmitter = null;
  beforeEach(() => {
    LetterEmitter = new LetterEmitter();
  });
  
  
  it('letter obj has letter', done => {
    const string = 'howdy';
    const letterMock = jest.fn();

    LetterEmitter.on('letter object', letterMock);

    LetterEmitter.on('end', () => {
      expect(letterMock).toHaveBeenCalled(string.length);
      [...string].forEach((letter, offset) => {
        expect(letterMock).toHaveBeenCalled({ letter, offset });
      });
      done();
    });
    LetterEmitter.read(string);
  });
});
