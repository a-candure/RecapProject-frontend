import { ResponseModel } from "../responseModel";
import { CarImage } from "./carImage";


export interface CarImageResponseModel extends ResponseModel{
    data:  CarImage[]
  }