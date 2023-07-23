export interface Board{
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
    get categoryInfo():Board {
        
        return {
            boardId: this.boardId,
            boardName: this.boardName
        };
    }
}
export default Category;