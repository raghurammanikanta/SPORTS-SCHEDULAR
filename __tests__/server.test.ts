const request = require('supertest');
const app = require('../server');

describe('Login Tests', () => {
  it('responds with a redirect to /admin-dashboard when admin logs in', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'admin', password: '1234' });

    expect(response.status).toBe(200); // Ensure the status is 302 for redirection
    expect(response.headers['location']).toBe('/admin-dashboard'); // Check the redirection target
  });

  it('responds with a redirect to /player-dashboard when player logs in', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'user', password: '1234' });

    expect(response.status).toBe(200); // Ensure the status is 302 for redirection
    expect(response.headers['location']).toBe('/player-dashboard'); // Check the redirection target
  });
