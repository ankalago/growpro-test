import axios from 'axios';
import { Bike } from './entities/bike';

export const fetchData = (): Promise<Bike[]> =>
  axios.get('http://localhost:3004/bicycles').then((response) => response.data)
