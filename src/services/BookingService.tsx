import {AxiosError, AxiosResponse} from 'axios';
import axiosConfig from '.';
import APIs from './APIs';

export interface AstraResponse {
  data: AxiosResponse['data'];
  error: AxiosError;
}
const BookingService = {
  getListPost: (): Promise<AxiosResponse> => {
    return axiosConfig.get(APIs.GET_LIST_POST);
  },
  getListComment: (): Promise<AxiosResponse> => {
    return axiosConfig.get(APIs.GET_LIST_COMMENT);
  },
};

export default BookingService;
