import { useQuery } from '@tanstack/react-query';
import { BikeType, Types } from '../entities/bike';
import { QUERY_KEY_BIKE, QUERY_KEY_BIKES, QUERY_KEY_TYPES } from '../constants';
import { fetchDataBikeById, fetchDataBikes, fetchDataType } from '../services/services';
import { UseQueryResult } from '@tanstack/react-query/src/types';

export const useQueryDataTypes = (): UseQueryResult<Types[], any> => {
  const { ...data } = useQuery<unknown, unknown, Types[], string[]>({
    queryKey: [QUERY_KEY_TYPES],
    queryFn: fetchDataType,
    staleTime: 6000
  })

  return { ...data }
}

export const useQueryDataBikes = (slug: string = ""): UseQueryResult<BikeType[], any> => {
  const { ...data } = useQuery<unknown, unknown, BikeType[], string[]>({
    queryKey: [QUERY_KEY_BIKES, slug],
    queryFn: fetchDataBikes
  })

  return data
}

export const useQueryDataBike = (slug: string): UseQueryResult<BikeType[], any> => {
  const { ...data } = useQuery<unknown, unknown, BikeType[], string[]>({
    queryKey: [QUERY_KEY_BIKE, slug],
    queryFn: fetchDataBikeById
  })

  return data
}
