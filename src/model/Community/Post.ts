interface image{
    imageUrl: string;
    imageName: string;
}
interface postImage{
    uri: string;
    type: 'multipart/form-data';
    name: string;
}
export interface postType{
    postId: number;
    categoryId: number;
    title: string;
    content: string;
    modifiedTime: Date;
    like: number;
    views: number;
    author: string;
    isModified: boolean;
    isImage: number;
    Image: image[];
}
export default class Post{
    postId: number;
    categoryId: number;
    title: string;
    content: string;
    modifiedTime: Date;
    like: number;
    views: number;
    author: string;
    isModified: boolean;
    isImage: number;
    Image: image[];

    constructor(
        postId: number, categoryId: number, title: string, content: string,
        modifiedTime: Date, like: number, views: number, author: string, isModifed: boolean,
        isImage: number, Image: image[]
    ) {
        this.postId = postId;
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.modifiedTime = modifiedTime;
        this.like = like;
        this.views = views;
        this.author = author;
        this.isModified = isModifed;
        this.isImage = isImage;
        this.Image = Image
    }
    get postItem() {

        let data: FormData = new FormData();
        let fileList: postImage[] = [];
        for (let i = 0; i < this.Image.length; i++){
            fileList.concat({
                uri: this.Image[i].imageUrl,
                type: 'multipart/form-data',
                name: this.Image[i].imageName,
            })
        }
        data.append("postId", this.postId);
        data.append("categoryId", this.categoryId);
        data.append("title", this.title);
        data.append("content", this.content);
        //YYYY-MM-DD
        data.append("modifiedTime", this.modifiedTime.toISOString().split('T')[0]);
        data.append("like", this.like);
        data.append("views", this.views);
        data.append("author", this.author);
        data.append("isModified", this.isModified);
        data.append("isImage", this.isImage);
        data.append("image", fileList);

        return data;
    }
}