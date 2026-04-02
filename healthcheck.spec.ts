import { test, expect } from '@playwright/test';

test.describe('API Healthcheck', () => {
  test('should return 200 from health endpoint', async ({ request }) => {
    const response = await request.get('https://example.com/api/health');
    expect(response.status()).toBe(200);
  });
});
