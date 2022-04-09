import ProductContext from './ProductContext';;
import AbstractProductState from './AbstractProductState';

export default class ExpiredProductState extends AbstractProductState {
	productContext: ProductContext;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext
	}

	renewListing() {
		this.productContext.setState(this.productContext.availableProductState);
	}

	end() {
		console.log('Product got expired, Bye!');
	}
};

