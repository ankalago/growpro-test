import React, { useEffect, useState } from 'react';
import Colors from './Colors';
import Sizes from './Sizes';
import Datepicker from 'react-tailwindcss-datepicker';
import dayjs from 'dayjs';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { useDispatch } from 'react-redux';
import { setSelectDatesBooking } from '../store/states/booking';

type Props = {
  color: string[]
  sizes: string[]
}

const Booking: React.FC<Props> = ({color, sizes}) => {
  const [selectDates, setSelectDates] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date()
  });
  const dispatch = useDispatch();

  const handleValueChange = (newValue: DateValueType) =>
    setSelectDates(newValue);

  useEffect(() => {
    dispatch(setSelectDatesBooking(selectDates))
  }, [selectDates])

  return (
    <form className="mt-5">
      {/* Colors */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Color</h3>
        <Colors color={color} />
      </div>

      {/* Sizes */}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">Size</h3>
        </div>

        <Sizes sizes={sizes} />
      </div>

      {/* Name */}
      <div className="mt-5">
        <h3 className="text-sm font-medium text-gray-900">Full Name</h3>
        <input
          type="text"
          name="name"
          id="name"
          className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Emails */}
      <div className="mt-5">
        <h3 className="text-sm font-medium text-gray-900">Email address</h3>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Phone */}
      <div className="mt-5">
        <h3 className="text-sm font-medium text-gray-900">Phone</h3>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Dates */}
      <div className="mt-5">
        <h3 className="text-sm font-medium text-gray-900">Dates</h3>
        <Datepicker
          primaryColor={"indigo"}
          value={selectDates}
          minDate={new Date(dayjs().subtract(1, 'day').toDate())}
          onChange={handleValueChange}
          placeholder="Select Dates"
          inputClassName="font-normal dark:bg-white dark:border dark:shadow-sm dark:text-gray-900 dark:border-gray-300"
          containerClassName="mt-4"
        />
      </div>

      <button
        type="button"
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Booking
      </button>
    </form>
  )
}

export default Booking
