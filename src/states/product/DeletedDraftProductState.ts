import ProductContext from './ProductContext';;
import AbstractProductState from './AbstractProductState';

export default class DeletedDraftProductState extends AbstractProductState {
	productContext: ProductContext;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext
	}

	end() {
		console.log('Draft is deleted, Bye!');
	}
};
