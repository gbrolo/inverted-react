import { reverseString } from '../actions';
import { REVERSE_STRING } from '../constants';

describe('LandingPage actions', () => {
  describe('Reverse String Action', () => {
    it('has a type of REVERSE_STRING', () => {
      const expected = {
        type: REVERSE_STRING,
      };
      expect(reverseString()).toEqual(expected);
    });
  });
});
