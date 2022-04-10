import ProductContext from './ProductContext';;
import AbstractProductState from './AbstractProductState';

export default class ReturnedProductState extends AbstractProductState {
	productContext: ProductContext;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext
	}

	next() {
		this.republish();
	}

	republish() {
		this.productContext.setState(this.productContext.draftProductState);
	}

	delete() {
		this.productContext.setState(this.productContext.deletedProductState);
	}
};
