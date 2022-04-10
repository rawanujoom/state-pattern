import ProductContext from './ProductContext';;
import AbstractProductState from './AbstractProductState';

export default class DraftProductState extends AbstractProductState {
	productContext: ProductContext;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext
	}

	next() {
		this.addDraftToListing();
	}

	addDraftToListing() {
		this.productContext.setState(this.productContext.availableProductState);
	}

	deleteDraftFromListing() {
		this.productContext.setState(this.productContext.deletedDraftProductState);
	}
}
