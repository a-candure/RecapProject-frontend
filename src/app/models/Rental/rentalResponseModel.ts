import { ResponseModel } from "../responseModel";
import { Rental } from "./rental";

export interface RentalResponsModel extends ResponseModel{
data:Rental[]
}