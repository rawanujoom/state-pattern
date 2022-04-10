'use strict';

import { Schema, model } from 'mongoose';
import ProductStateEnum from '../../enums/ProductStateEnum';

const productImageSchemaModel: Schema = new Schema({
	name: { type: String, required: true },
	url: { type: String, required: true },
	isMainImage: { type: Boolean, required: true },
});

export default model('product', productImageSchemaModel);
