import { Post } from "../_model/post";
import { UserReg } from "../_model/userReg";

export class CommentBox{
    commentId : number;
    message : string;
    commentAt : Date;
    userId : number;
    postId : number;
}