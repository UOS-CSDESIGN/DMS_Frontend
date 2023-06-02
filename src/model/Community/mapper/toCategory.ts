import Category from "../Category";

function toCategory(categoryId: number, name: string) {
    return (
        new Category(categoryId, name)
    );
}
export default toCategory;