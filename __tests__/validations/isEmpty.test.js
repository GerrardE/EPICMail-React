import isEmpty from '../../src/validations/isEmpty';

const undef = undefined;
const nul = null;
const string = '';
const food = {};

describe('Test for isEmpty function', () => {
  test('Confirms that isEmpty is true', () => {
    expect(isEmpty(food)).toEqual(true)
    expect(isEmpty(undef)).toEqual(true)
    expect(isEmpty(nul)).toEqual(true)
    expect(isEmpty(string)).toEqual(true)
  })
})
