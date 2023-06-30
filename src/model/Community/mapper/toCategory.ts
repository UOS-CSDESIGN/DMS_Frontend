import Category from "../Category";

function toCategory(boardId: number, boardName: string) {
    return (
        new Category(boardId, boardName)
    );
}
export default toCategory;