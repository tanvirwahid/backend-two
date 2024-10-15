import { CacheControlMiddleware } from './cacheControl.middleware';

describe('CacheControlMiddleware', () => {
  it('should be defined', () => {
    expect(new CacheControlMiddleware()).toBeDefined();
  });
});
