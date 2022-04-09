import ProductContext from './ProductContext';;
import AbstractProductState from './AbstractProductState';

export default class ReservedProductState extends AbstractProductState {
	productContext: ProductContext;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext
	}

	successfulPayment() {
		this.productContext.setState(this.productContext.soldProductState);
	}

	failedPayment() {
		this.productContext.setState(this.productContext.availableProductState);
	}
};
