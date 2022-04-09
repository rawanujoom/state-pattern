import ProductStateEnum from '../../enums/ProductStateEnum';
import ProductStateInterface from '../../interfaces/ProductStateInterface';
import AbstractProductState from './AbstractProductState';
import AvailableProductState from './AvailableProductState';
import DeletedDraftProductState from './DeletedDraftProductState';
import DeletedProductState from './DeletedProductState';
import DraftProductState from './DraftProductState';
import ExpiredProductState from './ExpiredProductState';
import ReservedProductState from './ReservedProductState';
import ReturnedProductState from './ReturnedProductState';
import SoldProductState from './SoldProductState';

let myMap = new Map<string, string>([
	['key1', 'value1'],
	['key2', 'value2'],
]);

export default class ProductStateMapper {
	static stateMap = new Map<ProductStateEnum, any>([
		[ProductStateEnum.DRAFT, DraftProductState],
		[ProductStateEnum.AVAILABLE, AvailableProductState],
		[ProductStateEnum.RESERVED, ReservedProductState],
		[ProductStateEnum.SOLD, SoldProductState],
		[ProductStateEnum.DELETED, DeletedProductState],
		[ProductStateEnum.DELETED_DRAFT, DeletedDraftProductState],
		[ProductStateEnum.RETURNED, ReturnedProductState],
		[ProductStateEnum.EXPIRED, ExpiredProductState],
	]);

	static mapStateEnumToStateClass(stateEnum: ProductStateEnum): any {
		return ProductStateMapper.stateMap.get(stateEnum);
	}
}
