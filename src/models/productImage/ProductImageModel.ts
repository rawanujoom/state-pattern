'use strict';

import Model from '../Model';
import productImageSchemaModel from './productImageSchemaModel';

class ProductImageModel extends Model {
	constructor() {
		super(productImageSchemaModel);
	}
}

export default new ProductImageModel();
