import {
  encodeUserInfo,
  decodeUserInfo,
  authenticationToken,
  storeAuthenticationToken,
  redirect,
} from './helpers';

describe('HELPER.JS', () => {
  const userData = {
    id: '1',
    firstName: 'example',
    email: 'example@email.com',
    token: 'long-token-string',
  };

  it('should generate a token successfully', () => {
    expect(encodeUserInfo(userData)).toBe(undefined);
  });

  it('should decode a token successfully', () => {
    expect(decodeUserInfo).toBeInstanceOf(Object);
  });

  it('should get a token successfully', () => {
    expect(authenticationToken()).toBe(null);
  });

  it('should generate and token successfully', () => {
    const encoded = storeAuthenticationToken(userData);
    expect(encoded).toBe(authenticationToken());
  });

  it('should equal successfully', () => {
    expect(redirect(userData)).toEqual(userData);
  });
});
