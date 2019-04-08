const LetterEmitter = require('./eeLetter');

describe('ee letter emitter', () => {
    let splitEmit;
    let string;
  beforeEach(() => {
    splitEmit = new LetterEmitter();
    string = 'peaches and cream';
  });
  it('splits a string and emits an event on each letter', done => {
    const mock = jest.fn();
    splitEmit.on()

    splitEmit.on('letter emitter', data => {
      console.log('letter emitter', data);
      mock();
    });
    
    splitEmit.once('end', () => done());

    splitEmit.read(string, () => {
      expect(mock()).toBeCalledTimes(17);
    });
  });
});