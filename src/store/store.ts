import { configureStore } from '@reduxjs/toolkit';
import { BookingType } from '../entities/booking';
import bookingSlice from './states/booking';

export interface AppStore {
  booking: BookingType
}

export default configureStore<AppStore>({
  reducer: {
    booking: bookingSlice
  }
})
