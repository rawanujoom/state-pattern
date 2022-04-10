import categoryModel from '../../../models/category/CategoryModel';


const resolvers = {
    getCategoryListByparentIdIfPassed: async (parent:any, args: any) => {
        if (args.parentId) {
            return await categoryModel.getByProperty({parentId: args.parentId});
        }
        return categoryModel.get();
    }
}

export default resolvers;

