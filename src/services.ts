import axios from 'axios';
import { BikeType } from './entities/bike';
import { BASE_ENDPOINT } from './constants';
import { QueryFunctionContext } from '@tanstack/query-core/src/types';

export const fetchData = (): Promise<BikeType[]> =>
  axios.get(`${BASE_ENDPOINT}/bicycles`).then((response) => response.data)

export const fetchDataById = ({ queryKey }: QueryFunctionContext<string[]>): Promise<BikeType> =>
  axios.get(`${BASE_ENDPOINT}/bicycles?slug=${queryKey[1]}`).then((response) => response.data)
