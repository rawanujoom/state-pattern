'use strict';

import ProductInterface from '../../interfaces/ProductInterface';
import ProductStateInterface from '../../interfaces/ProductStateInterface';
import ProductModel from '../../models/product/ProductModel';
import AvailableProductState from './AvailableProductState';
import DeletedDraftProductState from './DeletedDraftProductState';
import DeletedProductState from './DeletedProductState';
import DraftProductState from './DraftProductState';
import ExpiredProductState from './ExpiredProductState';
import ProductStateMapper from './ProductStateMapper';
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

		if (this.product.state) {
			const stateClass = ProductStateMapper.mapEnumToStateClass(
				this.product.state
			);
			this.currentState = new stateClass(this);
		} else {
			// Default Product State is Draft
			this.currentState = this.draftProductState;
		}
	}

	public setState(state: ProductStateInterface) {
		this.currentState = state;
	}

	public getState(): ProductStateInterface {
		return this.currentState;
	}

	 public async next() {
		await this.currentState.next();
		await ProductModel.update(this.product._id, {
			state: ProductStateMapper.mapStateClassNameToEnum(this.currentState.constructor.name),
		});
	}

	public prev() {
		this.currentState.prev();
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
