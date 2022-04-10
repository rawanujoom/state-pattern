import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
	name: 'Product',
	description: 'Product',
	fields: {
		_id: {
			type: GraphQLString,
		},
		name: {
			type: GraphQLString,
		},
		categoryId: {
			type: GraphQLString,
		},
		price: {
			type: GraphQLInt,
		},
	},
});
