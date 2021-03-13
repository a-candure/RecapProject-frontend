import { ResponseModel } from "../responseModel";
import { Cardetail } from "./cardetail";

export interface cardetailResponseModel extends ResponseModel{
    data:Cardetail[]
}