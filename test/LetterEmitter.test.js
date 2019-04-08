const LetterEmitter = require('../lib/LetterEmitter');

describe('emit each letter of a given string', () => {
  let letterEmitter = null;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('splits a string, returns each letter', done => {
    const string = 'Hi There';
    const mock = jest.fn();
    const pattern = /[a=z]/i;
      
    letterEmitter.on('letter', mock);

    letterEmitter.once('end', () => {
      expect(mock).toHaveBeenCalledTimes(7);
      [...string].forEach((letter, offset) => {
        if(pattern.test(letter)) {
          expect(mock).toHaveBeenCalledWith({
            letter,
            offset
          });
        }
      });
      done();
    });
    letterEmitter.read(string);
  });
});
