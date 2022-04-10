import ProductContext from './ProductContext';;
import AbstractProductState from './AbstractProductState';

export default class AvailableProductState extends AbstractProductState {

	static EXPIRY_TIME = 10000; // 10 seconds for testing
	productContext: ProductContext;
	expiryTimer: number;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext
		this.expiryTimer = 0;
		while (this.productContext.isAvailable()) {
			if (this.expiryTimer >= AvailableProductState.EXPIRY_TIME) {
				this.exceedDuration();
				this.expiryTimer = 0;
				break;
			} else {
				this.expiryTimer++;
			}
		}
	}

	next() {
		this.proceedPayment();
	}

	delete() {
		this.productContext.setState(this.productContext.deletedProductState);
	}

	proceedPayment() {
		this.expiryTimer = 0;
		this.productContext.setState(this.productContext.reservedProductState);
	}

	private exceedDuration() {
		this.productContext.setState(this.productContext.expiredProductState);
	}
};
