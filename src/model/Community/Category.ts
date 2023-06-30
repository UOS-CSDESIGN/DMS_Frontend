export interface Borad{
    boardId: number,
    boardName: string
};
class Category{
    boardId: number;
    boardName: string;

    constructor(
        boardId: number, boardName: string
    ) {
        this.boardId = boardId;
        this.boardName = boardName;
    }
    get categoryInfo():Borad {
        
        return {
            boardId: this.boardId,
            boardName: this.boardName
        };
    }
}
export default Category;