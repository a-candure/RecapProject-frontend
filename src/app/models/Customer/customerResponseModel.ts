import { ResponseModel } from "../responseModel";
import { Customer } from "./customer";


export interface CustomerResponsModel extends ResponseModel{
data:Customer[]
}