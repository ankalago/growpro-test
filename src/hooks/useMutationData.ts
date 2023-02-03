import { useMutation } from '@tanstack/react-query';
import { postDataBooking } from '../services';
import { UseMutationResult } from '@tanstack/react-query/src/types';

export const useMutationDataBooking = (): UseMutationResult<any, any, any, any> => {
  const mutation = useMutation({
    mutationFn: postDataBooking
  })

  return { ...mutation }
}
