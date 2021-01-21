import { M_DoantionType } from '../_model/m_DonationType';
import { Post } from '../_model/post';
import { UserReg } from '../_model/userReg';



export class Donation{
    donationId : number;
    status : string;
    donationDate : Date;
    userId : number;
    postId : number;
    donationTypeId: number;
}