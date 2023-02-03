export type ValueBookingType = {
  value: number
  label: string
};
export type BookingType = {
  daysBooking: ValueBookingType
  calculateValue: ValueBookingType
};
