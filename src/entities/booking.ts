import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

export type ValueBookingType = {
  value: number
  label: string
};
export type CalculateBookingType = {
  daysBooking: ValueBookingType
  calculateValue: ValueBookingType
};

export type BookingType = {
  days: number
  cost: number
  color: string
  size: string
  name: string
  email: string
  phone: string
  selectDates: DateValueType
  createAt: string
};
