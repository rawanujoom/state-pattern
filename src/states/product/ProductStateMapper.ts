import ProductStateEnum from '../../enums/ProductStateEnum';
import AvailableProductState from './AvailableProductState';
import DeletedDraftProductState from './DeletedDraftProductState';
import DeletedProductState from './DeletedProductState';
import DraftProductState from './DraftProductState';
import ExpiredProductState from './ExpiredProductState';
import ReservedProductState from './ReservedProductState';
import ReturnedProductState from './ReturnedProductState';
import SoldProductState from './SoldProductState';

export default class ProductStateMapper {
	static enumStateClassMap = new Map<ProductStateEnum, any>([
		[ProductStateEnum.DRAFT, DraftProductState],
		[ProductStateEnum.AVAILABLE, AvailableProductState],
		[ProductStateEnum.RESERVED, ReservedProductState],
		[ProductStateEnum.SOLD, SoldProductState],
		[ProductStateEnum.DELETED, DeletedProductState],
		[ProductStateEnum.DELETED_DRAFT, DeletedDraftProductState],
		[ProductStateEnum.RETURNED, ReturnedProductState],
		[ProductStateEnum.EXPIRED, ExpiredProductState],
	]);

	static stateClassEnumMap = new Map<string, ProductStateEnum>([
		['DraftProductState', ProductStateEnum.DRAFT],
		['AvailableProductState', ProductStateEnum.AVAILABLE],
		['ReservedProductState', ProductStateEnum.RESERVED],
		['SoldProductState', ProductStateEnum.SOLD],
		['DeletedProductState', ProductStateEnum.DELETED],
		['DeletedDraftProductState', ProductStateEnum.DELETED_DRAFT],
		['ReturnedProductState', ProductStateEnum.RETURNED],
		['ExpiredProductState', ProductStateEnum.EXPIRED],
	]);

	static mapEnumToStateClass(stateEnum: ProductStateEnum): any {
		return ProductStateMapper.enumStateClassMap.get(stateEnum);
	}

	static mapStateClassNameToEnum(stateClassName: string): any {
		return ProductStateMapper.stateClassEnumMap.get(stateClassName);
	}
}
