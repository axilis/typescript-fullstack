import * as supertest from 'supertest';
const request = supertest('http://localhost:3000');

describe('GET /', () => {
	it('should return 200 OK', (done) => {
		request.get('/').expect(200, done);
	});
});