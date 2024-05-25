const checkForPalindrome = require('./palindrome');

describe('check if string is palindrome', () => {
  it('should be a function', () => {
    expect(typeof checkForPalindrome).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof checkForPalindrome('hello')).toEqual('boolean');
  });
  it('should return true if is a palindrome', () => {
    expect(checkForPalindrome('wow')).toBeTruthy();
    expect(checkForPalindrome('kayak')).toBeTruthy();
  });
  it('should return false if is not a palindrome', () => {
    expect(checkForPalindrome('hello')).toBeFalsy();
    expect(checkForPalindrome('world')).toBeFalsy();
  });
  it('should return false if includes spaces', () => {
    expect(checkForPalindrome('hello world')).toBeFalsy();
  });
})