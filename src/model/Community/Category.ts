export interface categoryInterface{
    categoryId: number,
    name: string
};
class Category{
    categoryId: number;
    name: string;

    constructor(
        categoryId: number, name: string
    ) {
        this.categoryId = categoryId;
        this.name = name;
    }
    get categoryInfo() {
        const info = {
            id: this.categoryId,
            name: this.name
        };
        return info;
    }
}
export default Category;