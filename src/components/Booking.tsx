import React, { useEffect, useState } from 'react';
import Colors from './Colors';
import Sizes from './Sizes';
import Datepicker from 'react-tailwindcss-datepicker';
import dayjs from 'dayjs';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking, setDaysBooking, setSelectDatesBooking } from '../store/states/booking';
import Modal from './Modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BookingType } from '../entities/booking';
import { calculateDaysBooking } from '../utils/booking';
import { useMutationDataBooking } from '../hooks/useMutationData';
import { AppStore } from '../store/store';

type Props = {
  color: string[]
  sizes: string[]
}

const Booking: React.FC<Props> = ({color, sizes}) => {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<BookingType>();
  const mutation = useMutationDataBooking()
  const bookingState = useSelector((store: AppStore) => store.booking)
  const [selectDates, setSelectDates] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date()
  });

  const handleDatesChange = (newDate: DateValueType) => {
    setSelectDates(newDate);
    setValue('selectDates', newDate)
  }

  useEffect(() => {
    dispatch(setSelectDatesBooking(selectDates))
    dispatch(setDaysBooking(calculateDaysBooking(selectDates).daysBooking))
  }, [selectDates])

  const onSubmit: SubmitHandler<BookingType> = (data) => {
    dispatch(createBooking({ ...data, createAt: new Date().getTime() }))
    setOpenModal(true)
  }

  const handleOkAction = () => {
    mutation.mutate(bookingState)
  }

  register('color', { required: true })
  register('size', { required: true })
  register('selectDates', { required: true })

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal} okAction={handleOkAction}/>
      <form className="mt-5"  onSubmit={handleSubmit(onSubmit)}>
        {/* Colors */}
        <div>
          <h3 className="text-sm font-medium text-gray-900">Color</h3>
          <Colors color={color} setValue={setValue}/>
        </div>

        {/* Sizes */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
          </div>

          <Sizes sizes={sizes} setValue={setValue}/>
        </div>

        {/* Name */}
        <div className="mt-5">
          <h3 className="text-sm font-medium text-gray-900">Full Name</h3>
          <input
            type="text"
            id="name"
            className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("name", { required: true })}
          />
        </div>

        {/* Emails */}
        <div className="mt-5">
          <h3 className="text-sm font-medium text-gray-900">Email address</h3>
          <input
            type="email"
            id="email-address"
            autoComplete="email"
            className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("email", { required: true })}
          />
        </div>

        {/* Phone */}
        <div className="mt-5">
          <h3 className="text-sm font-medium text-gray-900">Phone</h3>
          <input
            type="tel"
            id="phone"
            className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("phone", { required: true })}
          />
        </div>

        {/* Dates */}
        <div className="mt-5">
          <h3 className="text-sm font-medium text-gray-900">Dates</h3>
          <Datepicker
            primaryColor={"indigo"}
            value={selectDates}
            minDate={new Date(dayjs().subtract(1, 'day').toDate())}
            onChange={handleDatesChange}
            placeholder="Select Dates"
            inputClassName="font-normal dark:bg-white dark:border dark:shadow-sm dark:text-gray-900 dark:border-gray-300"
            containerClassName="mt-4"
          />
        </div>

        <button
          type="submit"
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Booking
        </button>
      </form>
    </>
  )
}

export default Booking
