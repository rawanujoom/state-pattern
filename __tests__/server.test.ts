'use strict';
require('dotenv').config();
import server from '../src/server';
const supertest = require('supertest');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const request = supertest(server.server);

let parentId = '6252978a785f027c1c21aa04';

describe('api server', () => {

  beforeAll(async()=> {
      await request.post('/api/v1/category').send({
        name: 'category A',
        parentId: parentId
      });
      await request.post('/api/v1/category').send({
          name: 'category B',
          parentId: parentId
      });
      await request.post('/api/v1/category').send({
          name: 'category C',
          parentId: '77778a777f027c1c27aa77'
      });
  })
  it('should be able to get products on GET /product', async () => {
    const response = await request.get('/api/v1/product');
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(3);
  });
});
