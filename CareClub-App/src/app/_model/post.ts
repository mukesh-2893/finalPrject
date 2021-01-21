import { UserReg } from '../_model/userReg';
import { M_Requirement } from '../_model/m_Requirement';


export class Post{
    postId : number;
    userId : number;
    likes : number;
    media : string;
    postDesc : string;
    postedAt : Date;
    reqId : number;
}