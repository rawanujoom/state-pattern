import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import rootQuery from './graphql/queries/categoryQuery';

const schema = new GraphQLSchema({
	query: rootQuery,
});

const graphqlRouter = Router();

graphqlRouter.use(
	'/category',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

export default graphqlRouter;
