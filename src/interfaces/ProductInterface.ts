import ProductStateEnum from "../enums/ProductStateEnum";

export default interface ProductInterface {
    _id: number;
    name: string;
    categoryId: number;
    state: ProductStateEnum
}