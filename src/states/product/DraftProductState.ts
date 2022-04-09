import ProductContext from './ProductContext';;
import AbstractProductState from './AbstractProductState';

export default class DraftProductState extends AbstractProductState {
	productContext: ProductContext;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext
	}

	addDraftToListing() {
		this.productContext.setState(this.productContext.availableProductState);
	}

	deleteDraftFromListing() {
		this.productContext.setState(this.productContext.deletedDraftProductState);
	}
}
