import { configureStore } from '@reduxjs/toolkit';
import { Booking } from '../entities/booking';
import bookingSlice from './states/booking';

export interface AppStore {
  booking: Booking
}

export default configureStore<AppStore>({
  reducer: {
    booking: bookingSlice
  }
})
