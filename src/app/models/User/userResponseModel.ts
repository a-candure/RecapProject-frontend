import { ResponseModel } from "../responseModel";
import { User } from "./user";

export interface UserResponsModel extends ResponseModel{
    data:User[]
    }