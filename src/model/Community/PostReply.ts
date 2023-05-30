class PostReply{
    replyId: number;
    content: string;
    postId: number;
    modifiedTime: Date;
    isModified: boolean;
    parentReplyId: number;
    like: number;

    constructor(
        replyId: number, postId: number, parentReplyId: number,
        content: string, modifiedTime: Date, isModified: boolean,
        like: number
    ) {
        this.replyId = replyId;
        this.postId = postId;
        this.parentReplyId = parentReplyId;
        this.content = content;
        this.modifiedTime = modifiedTime;
        this.isModified = isModified;
        this.like = like;
    };
    get formData() {
        
        let data: FormData = new FormData();

        data.append('replyId', this.replyId);
        data.append('postId', this.postId);
        data.append('parentReplyId', this.parentReplyId);
        data.append('content', this.content);
        data.append('modifiedTime', this.modifiedTime);
        data.append('isModified', this.isModified);
        data.append('like', this.like);

        return data;
    };
    get jsonData() {
        return {
            'replyId': this.replyId,
            'postId': this.postId,
            'parentReplyId': this.parentReplyId,
            'content': this.content,
            'modifiedTime': this.modifiedTime,
            'isModified': this.isModified,
            'like': this.like
        };
    }
};
export default PostReply;