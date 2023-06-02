import Post, { postType } from "../Post";


function toPost(data:postType){
    return (
        new Post(
            data.postId, data.categoryId, data.title, data.content,
            data.modifiedTime, data.like, data.views, data.author, data.isModified,
            data.isImage, data.Image
        )
    );
}
export default toPost;