import { Booking } from '../../entities/booking';
import { createSlice } from '@reduxjs/toolkit';

export const bookingEmptyState: Booking = {
  days: 0,
  color: "",
  size: "",
  name: "",
  email: "",
  phone: "",
  selectDates: {
    startDate: new Date(),
    endDate: new Date()
  },
  createAt: ""
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: bookingEmptyState,
  reducers: {
    createBooking: (state, action) => action.payload,
    setSelectDatesBooking: (state, action) => ({ ...state, selectDates: { ...action.payload } })
  }
})

export const { createBooking, setSelectDatesBooking } = bookingSlice.actions

export default bookingSlice.reducer
