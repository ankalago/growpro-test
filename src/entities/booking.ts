import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

export type ValueBookingType = {
  value: number
  label: string
};
export type BookingType = {
  daysBooking: ValueBookingType
  calculateValue: ValueBookingType
};

export type Booking = {
  days: number
  color: string
  size: string
  name: string
  email: string
  phone: string
  selectDates: DateValueType
  createAt: string
};
