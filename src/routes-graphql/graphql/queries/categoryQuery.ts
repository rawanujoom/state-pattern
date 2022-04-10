import {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';

import categoryType from '../types/categoryType';
import categoryResolvers from '../resolvers/categoryResolver';

const rootQuery = new GraphQLObjectType({
	name: 'Categories',
	description: 'this is the rootquery',
	fields: {
		categories: {
			type: GraphQLList(categoryType),
			args: {
				parentId: {
					type: GraphQLString,
				},
			},
			resolve: categoryResolvers.getCategoryListByparentIdIfPassed,
		},
	},
});

export default rootQuery;
