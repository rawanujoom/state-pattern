import ProductContext from './ProductContext';
import AbstractProductState from './AbstractProductState';

export default class DeletedProductState extends AbstractProductState {
	productContext: ProductContext;

	constructor(productContext: ProductContext) {
		super();
		this.productContext = productContext;
	}

	end() {
        console.log('Product was deleted successfuly, Bye!');
    }
};
