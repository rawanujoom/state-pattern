export default class Category {
	id: number;
	name: string;
	parentId: number;

	constructor(id: number, name: string, parentId: number) {
		this.id = id;
		this.name = name;
		this.parentId = parentId;
	}

	static getCategoryListByParentId(parentId: number) {
		return [
			{
				id: 1,
				name: 'Evening Dress',
				parentId: parentId,
			},
			{
				id: 2,
				name: 'Formal Dress',
				parentId: parentId,
			}
		]
	}
}
