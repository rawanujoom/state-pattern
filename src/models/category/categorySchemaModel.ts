'use strict';

import { Schema, model } from 'mongoose';

const categorySchema: Schema = new Schema({
	name : {type: String, required: true},
	parentId: {type: Number, required: false},
});

export default model('category', categorySchema);
