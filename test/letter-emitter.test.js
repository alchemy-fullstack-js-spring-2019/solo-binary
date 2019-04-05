const LetterEmitter = require('../lib/LetterEmitter');

describe('letter emitter finction', () => {
  let LetterEmitter = null;
  beforeEach(() => {
    LetterEmitter = new LetterEmitter();
    const ltrObjArr = [
      { letter: 'h', offset: 20 },
      { letter: 'o', offset: 20 },
      { letter: 'w', offset: 20 },
      { letter: 'd', offset: 20 },
      { letter: 'y', offset: 20 },
    ];
  });


  it('letter obj has letter', () => {
    const string = 'howdy';
    const result = LetterEmitter.read(string);
    expect(result).toEqual(ltrObjArr);
  });
});
