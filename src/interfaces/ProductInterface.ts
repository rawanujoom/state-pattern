import ProductStateEnum from "../enums/ProductStateEnum";

export default interface ProductInterface {
    _id: string;
    name: string;
    categoryId: number;
    state: ProductStateEnum
}