import React, { useEffect, useState } from 'react';
import Colors from './Colors';
import Sizes from './Sizes';
import Datepicker from 'react-tailwindcss-datepicker';
import dayjs from 'dayjs';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBooking,
  resetBooking, selectEmptyState,
  setCostBooking,
  setDaysBooking,
  setSelectDatesBooking
} from '../store/states/booking';
import Modal from './Modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BookingType } from '../entities/booking';
import { useMutationDataBooking } from '../hooks/useMutationData';
import { AppStore } from '../store/store';
import { Types } from '../entities/bike';
import { useBooking } from '../hooks/useBooking';
import { classNames } from '../utils/utils';
import BookingConfirmation from './BookingConfirmation';
import BookingSuccess from './BookingSuccess';

type Props = {
  color: string[]
  sizes: string[]
  types: Types
}

const Booking: React.FC<Props> = ({color, sizes, types}) => {
  const [openModal, setOpenModal] = useState(false)
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm<BookingType>();
  const mutation = useMutationDataBooking()
  const bookingState = useSelector((store: AppStore) => store.booking)
  const { calculateBooking } = useBooking()
  const [selectDates, setSelectDates] = useState<DateValueType>(selectEmptyState);

  const handleDatesChange = (newDate: DateValueType) => {
    setSelectDates(newDate);
    dispatch(setSelectDatesBooking(newDate))
    setValue('selectDates', newDate)
  }

  useEffect(() => {
    const calculateBookingValue = calculateBooking(bookingState.selectDates, types);
    dispatch(setDaysBooking(calculateBookingValue.daysBooking.value))
    dispatch(setCostBooking(calculateBookingValue.calculateValue.value))
  }, [selectDates])

  const onSubmit: SubmitHandler<BookingType> = (data) => {
    dispatch(createBooking({ ...data, createAt: new Date().getTime() }))
    setOpenModal(true)
  }

  const handleOkAction = () => {
    mutation.mutate(bookingState)
    setSelectDates(selectEmptyState)
    dispatch(resetBooking())
    setOpenSuccessModal(true)
    reset()
  }

  register('color', { required: true, value: color[0] })
  register('size', { required: true, value: sizes[sizes.length - 1] })
  register('selectDates', { required: true })

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal} okAction={handleOkAction}><BookingConfirmation /></Modal>
      <Modal open={openSuccessModal} setOpen={setOpenSuccessModal} okAction={() => setOpenSuccessModal(false)} footer={false}><BookingSuccess/></Modal>
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
            className={classNames(
              errors.name ? "border-rose-500 border-2": "border-gray-300",
              "mt-4 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            )}
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
            className={classNames(
              errors.email ? "border-rose-500 border-2": "border-gray-300",
              "mt-4 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            )}
            {...register("email", { required: true })}
          />
        </div>

        {/* Phone */}
        <div className="mt-5">
          <h3 className="text-sm font-medium text-gray-900">Phone</h3>
          <input
            type="tel"
            id="phone"
            className={classNames(
              errors.phone ? "border-rose-500 border-2": "border-gray-300",
              "mt-4 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            )}
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
            inputClassName={classNames(
              errors.selectDates ? "dark:border-rose-500 dark:border-2": "dark:border-gray-300",
              "font-normal dark:bg-white dark:border dark:shadow-sm dark:text-gray-900"
            )}
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
