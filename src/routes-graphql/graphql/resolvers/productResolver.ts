import ProductInterface from '../../../interfaces/ProductInterface';
import categoryModel from '../../../models/category/CategoryModel';
import ProductModel from '../../../models/product/ProductModel';
import ProductContext from '../../../states/product/ProductContext';

const productResolvers = {
    getProductListByStateAndTransfer: async (parent:any, args: any) => {
        const data: Array<ProductInterface> = await ProductModel.getByProperty({state: args.state});

        for (const product of data) {
            const context = new ProductContext(product);
            await context.next();
        }
        return data;
    }
};


export default productResolvers;