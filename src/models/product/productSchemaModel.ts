'use strict';

import { Schema, model } from 'mongoose';
import ProductStateEnum from '../../enums/ProductStateEnum';

const productSchema: Schema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	categoryId: { type: Number },
	state: {
		type: String,
		enum: [
			ProductStateEnum.DRAFT,
			ProductStateEnum.AVAILABLE,
			ProductStateEnum.RESERVED,
			ProductStateEnum.SOLD,
			ProductStateEnum.DELETED_DRAFT,
			ProductStateEnum.EXPIRED,
			ProductStateEnum.RETURNED,
			ProductStateEnum.DELETED,
		],
		default: ProductStateEnum.DRAFT
	},
});

export default model('product', productSchema);
