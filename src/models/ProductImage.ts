import ProductImageInterface from '../interfaces/ProductImageInterface';

export default class ProductImage {
	id: number;
	productId: number;
	url: string;
	isMainImage: boolean;

	constructor(productId: number, url: string, isMainImage: boolean = false) {
		this.id = 1; // TODO: use uuid()
		this.productId = productId;
		this.url = url;
		this.isMainImage = isMainImage;
	}

	save() {
		//TODO: add in memory DB
	}

	get(id: number): ProductImageInterface {
		return {
			id: 1,
			productId: 1,
			url: 'cdn.test.com/dress-white-edin-xs.jpg',
			isMainImage: true
		};
	}

	getByProductId(id: number): Array<ProductImageInterface> {
		return [

		];
	}
}
