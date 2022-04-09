'use strict';

import CategoryInterface from '../../interfaces/CategoryInterface';
import Model from '../Model';
import categorySchemaModel from './categorySchemaModel';

class CategoryModel extends Model {
	constructor() {
		super(categorySchemaModel);
	}
}

export default new CategoryModel();
