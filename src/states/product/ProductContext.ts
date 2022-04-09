'use strict';

import ProductInterface from '../../interfaces/ProductInterface';
import ProductStateInterface from '../../interfaces/ProductStateInterface';
import AvailableProductState from './AvailableProductState';
import DeletedDraftProductState from './DeletedDraftProductState';
import DeletedProductState from './DeletedProductState';
import DraftProductState from './DraftProductState';
import ExpiredProductState from './ExpiredProductState';
import ReservedProductState from './ReservedProductState';
import ReturnedProductState from './ReturnedProductState';
import SoldProductState from './SoldProductState';

export default class ProductContext {

	public draftProductState: ProductStateInterface;
	public availableProductState: ProductStateInterface;
	public expiredProductState: ProductStateInterface;
	public deletedDraftProductState: ProductStateInterface;
	public deletedProductState: ProductStateInterface;
	public reservedProductState: ProductStateInterface;
	public returnedProductState: ProductStateInterface;
	public soldProductState: ProductStateInterface;

	private currentState: ProductStateInterface;
	private product: ProductInterface;

	constructor(product: ProductInterface) {
		this.draftProductState = new DraftProductState(this);
		this.availableProductState = new AvailableProductState(this);
		this.expiredProductState = new ExpiredProductState(this);
		this.deletedDraftProductState = new DeletedDraftProductState(this);
		this.deletedProductState = new DeletedProductState(this);
		this.reservedProductState = new ReservedProductState(this);
		this.returnedProductState = new ReturnedProductState(this);
		this.soldProductState = new SoldProductState(this);
		this.product = product;

		// if (this.product.state) {
		// 	// this.currentState = this.product.state;
		// } else {
			// Default Product State is Draft
			this.currentState = this.draftProductState;
		// }
	}

	public setState(state: ProductStateInterface) {
		this.currentState = state;
	}

	public getState(): ProductStateInterface {
		return this.currentState;
	}

	public isDraft(): boolean {
		return this.currentState instanceof DraftProductState;
	}

	public isAvailable(): boolean {
		return this.currentState instanceof AvailableProductState;
	}

	public isDraftDeleted(): boolean {
		return this.currentState instanceof DeletedDraftProductState;
	}

	public isExpired(): boolean {
		return this.currentState instanceof ExpiredProductState;
	}

	public isSold(): boolean {
		return this.currentState instanceof SoldProductState;
	}

	public isReturned(): boolean {
		return this.currentState instanceof ReturnedProductState;
	}

	public isDeleted(): boolean {
		return this.currentState instanceof DeletedProductState;
	}
}
