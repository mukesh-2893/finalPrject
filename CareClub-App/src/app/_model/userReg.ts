import{Address} from '../_model/address';
import { M_Role } from '../_model/m_Role';

export class UserReg extends M_Role {
    userId : number;
    roleId : number;
    address : any;
    name : string;
    password: string;
    email : string;
    mobileNo: string;

}
