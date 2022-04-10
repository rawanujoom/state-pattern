import {
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
	name: 'Category',
	description: 'Category',
	fields: {
		_id: {
			type: GraphQLString,
		},
		name: {
			type: GraphQLString,
		},
		parentId: {
			type: GraphQLString,
		},
	},
});
