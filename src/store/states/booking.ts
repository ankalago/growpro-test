import { BookingType } from '../../entities/booking';
import { createSlice } from '@reduxjs/toolkit';


export const selectEmptyState = {
  startDate: new Date(),
  endDate: new Date()
}

export const bookingEmptyState: BookingType = {
  days: 0,
  cost: 0,
  color: "",
  size: "",
  name: "",
  email: "",
  phone: "",
  selectDates: selectEmptyState,
  createAt: ""
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: bookingEmptyState,
  reducers: {
    createBooking: (state, action) => ({ ...state, ...action.payload }),
    setSelectDatesBooking: (state, action) => ({ ...state, selectDates: { ...action.payload } }),
    setDaysBooking: (state, action) => ({ ...state, days: action.payload }),
    setCostBooking: (state, action) => ({ ...state, cost: action.payload }),
    resetBooking: () => bookingEmptyState
  }
})

export const { createBooking, setSelectDatesBooking, setDaysBooking, setCostBooking, resetBooking } = bookingSlice.actions

export default bookingSlice.reducer
