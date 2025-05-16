const request = require('supertest');
const app = require('../app');

describe('Authentication & Account API', () => {
  let token = '';
  const email = 'testuser@example.com';
  const password = 'Test123!';
  const name = 'Test User';

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({ email, password, name });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  it('should login the user', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email, password });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should get account details', async () => {
    const res = await request(app)
      .get('/api/account')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.email).toBe(email);
  });

  it('should update the user name', async () => {
    const res = await request(app)
      .put('/api/update-account')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Updated Name' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.user.name).toBe('Updated Name');
  });

  it('should delete the user', async () => {
    const res = await request(app)
      .delete('/api/delete-account')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
  });
});
