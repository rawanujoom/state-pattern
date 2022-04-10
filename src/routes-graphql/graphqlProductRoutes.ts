import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import productQuery from './graphql/queries/productQuery';

const productSchema = new GraphQLSchema({
	query: productQuery,
});

const graphqlRouter = Router();

graphqlRouter.use(
	'/product',
	graphqlHTTP({
		schema: productSchema,
		graphiql: true,
	})
);

export default graphqlRouter;
