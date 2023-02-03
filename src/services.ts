import axios from 'axios';
import { BikeType, Types } from './entities/bike';
import { BASE_ENDPOINT } from './constants';
import { QueryFunctionContext } from '@tanstack/query-core/src/types';

export const fetchDataBikes = ({ queryKey }: QueryFunctionContext<string[]>): Promise<BikeType[]> => {
  const type = queryKey[1];
  const search = type ? `?types.value=${type}` : '';
  const url = `${BASE_ENDPOINT}/bicycles${search}`;
  return axios.get(url).then((response) => response.data)
}

export const fetchDataBikeById = ({ queryKey }: QueryFunctionContext<string[]>): Promise<BikeType> =>
  axios.get(`${BASE_ENDPOINT}/bicycles?slug=${queryKey[1]}`).then((response) => response.data)

export const fetchDataType = (): Promise<Types[]> =>
  axios.get(`${BASE_ENDPOINT}/types`).then((response) => response.data)

export const postDataBooking = (data: BikeType): Promise<any> =>
  axios.post(`${BASE_ENDPOINT}/booking`, data ).then((response) => response.data)
