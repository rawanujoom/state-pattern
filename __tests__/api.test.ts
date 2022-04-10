'use strict';
require('dotenv').config();
const supertest = require('supertest');

const EasyGraphQLTester = require('easygraphql-tester');
const server = require('../src/server');
const categoryResolvers = require('./src/routes-graphql/graphql/resolvers/productResolver').default;
const categoryType = require('./src/routes-graphql/graphql/types/productType').default;

// this will create a test in-memory mongo db
require('@code-fellows/supergoose');

const request = supertest(server.server);

let parentId = '6252978a785f027c1c21aa04';
let tester;

describe('api server', () => {
	beforeAll(async () => {
		await request.post('/api/v1/category').send({
			name: 'category A',
			parentId: parentId,
		});
		await request.post('/api/v1/category').send({
			name: 'category B',
			parentId: parentId,
		});
		await request.post('/api/v1/category').send({
			name: 'category C',
			parentId: '77778a777f027c1c27aa77',
		});
		tester = new EasyGraphQLTester(categoryType, categoryResolvers.getProductListByStateAndTransfer)
	});

	it('should be able to get products on GET /category', async () => {
		const response = await request.get('/api/v1/category');
		expect(response.status).toEqual(200);
		expect(response.body.length).toEqual(3);
	});

	it('should be able to get products on GET categories by parent id /category/:id', async () => {
		const response = await request.get('/api/v1/category/6252978a785f027c1c21aa04');
		expect(response.status).toEqual(200);
		expect(response.body.length).toEqual(2);
	});

	// TODO: check using EasyGraphQLTester tests
	it('Should pass if the query is valid', () => {
		const validQuery = `
		{
		  categories {
			name
		  }
		}
		`
	  });

});
