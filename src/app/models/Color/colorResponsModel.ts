import { ResponseModel } from "../responseModel";
import { Color } from "./color";


export interface ColorResponsModel extends ResponseModel{
    data: Color []
}