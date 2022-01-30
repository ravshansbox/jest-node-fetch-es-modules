import fetch from 'node-fetch';

test('github api returns 200 status', async () => {
  const response = await fetch('https://api.github.com');
  expect(response.status).toBe(200);
});
