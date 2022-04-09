'use strict';

import Model from '../Model';
import productSchemaModel from './productSchemaModel';

class ProductModel extends Model {
	constructor() {
		super(productSchemaModel);
	}
}

export default new ProductModel();
