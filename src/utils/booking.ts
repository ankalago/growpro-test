import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

export const calculateDaysBooking = (selectDates: DateValueType) => {
  const endDate = new Date(selectDates?.endDate ?? '');
  const startDate = new Date(selectDates?.startDate ?? '');
  const daysBooking = ((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1
  return { daysBooking, startDate, endDate }
}
