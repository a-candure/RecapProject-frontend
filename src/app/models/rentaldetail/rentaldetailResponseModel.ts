import { ResponseModel } from '../responseModel';
import { Rentaldetail } from './rentaldetail';


export interface rentaldetailsResponseModel extends ResponseModel {
  data: Rentaldetail[];
}
