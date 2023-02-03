import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { Types } from '../entities/bike';
import dayjs from 'dayjs';
import { CalculateBookingType } from '../entities/booking';
import { calculateDaysBooking } from '../utils/booking';

export const useBooking = () => {

  const calculateDaysToBooking = (daysQuantities: number, type: Types) => {
    const promoDays = type.daysPromo - 1
    const validatePromoDays = promoDays < 0 ? 0 : promoDays
    const differenceDays = daysQuantities - validatePromoDays;
    return differenceDays <= 0 ? 1 : differenceDays
  }

  const calculateValueBooking = (valueOfBooking: number, daysToBooking: number) =>
    daysToBooking * valueOfBooking

  const calculateBooking = (selectDates: DateValueType, type: Types): CalculateBookingType => {
    const calculateDaysBookingReservation = calculateDaysBooking(selectDates);
    const daysBooking = calculateDaysBookingReservation.daysBooking
    const valueOfBooking = Number(dayjs(calculateDaysBookingReservation.startDate).format("D")) >= 15 ? 12 : 10
    const daysToBooking = calculateDaysToBooking(daysBooking, type)
    const calculateValue = calculateValueBooking(valueOfBooking, daysToBooking)
    return {
      daysBooking: {
        value: daysBooking,
        label: `by ${daysBooking} day${daysBooking > 1 ? 's': ''}`
      },
      calculateValue: {
        value: calculateValue,
        label: `$${calculateValue}`
      }
    }
  }

  return { calculateBooking }

}
