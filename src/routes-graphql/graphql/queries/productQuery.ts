import {
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';

import productType from '../types/productType';
import productResolvers from '../resolvers/productResolver';

const rootQuery = new GraphQLObjectType({
	name: 'Products',
	description: 'this is the rootquery',
	fields: {
		products: {
			type: GraphQLList(productType),
			args: {
				state: {
					type: GraphQLString
				}
			},
			resolve: productResolvers.getProductListByStateAndTransfer
		}
	},
});

export default rootQuery;
