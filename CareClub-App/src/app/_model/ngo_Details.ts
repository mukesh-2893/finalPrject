import { UserReg } from '../_model/userReg';
import { M_Category } from '../_model/m_Category';
import { BankAccountDetails } from '../_model/bankAccountDetails';

export class NGO_Details{
    ngoId : number;
    userId : number;
    categoryId : number;
    accountId : number;
    ngoOwnerName : string;
    memberCount : number;
    volunteerCount : number;
    ngoProfilePic : string;
    ngoProfileDesc : string;
}