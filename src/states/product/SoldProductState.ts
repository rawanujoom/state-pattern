import ProductContext from './ProductContext';;
import AbstractProductState from './AbstractProductState';

export default class SoldProductState extends AbstractProductState {
	productContext: ProductContext;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext
	}

	disputeAccept() {
		this.productContext.setState(this.productContext.returnedProductState);
	}

	end() {
        console.log('Product is sold, Great news!');
	}
};
