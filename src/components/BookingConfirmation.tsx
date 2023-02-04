import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../store/store';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';

type Props = {
}

const BookingConfirmation: React.FC<Props> = () => {
  const bookingState = useSelector((store: AppStore) => store.booking)

  return (
    <div className="sm:flex sm:items-start">
      <div
        className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
        <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true"/>
      </div>
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
          Booking Action
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Are you sure you want to booking with this data:
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="font-medium text-gray-900">Cost:</span> <span
            className="font-bold text-gray-500">${bookingState.cost}</span>
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="font-medium text-gray-900">Name:</span> <span
            className="font-medium text-gray-500">{bookingState.name}</span>
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="font-medium text-gray-900">Email:</span> <span
            className="font-medium text-gray-500">{bookingState.email}</span>
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="font-medium text-gray-900">Phone:</span> <span
            className="font-medium text-gray-500">{bookingState.phone}</span>
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="font-medium text-gray-900">Color:</span> <span
            className="font-medium text-gray-500">{bookingState.color}</span>
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="font-medium text-gray-900">Size:</span> <span
            className="font-medium text-gray-500">{bookingState.size}</span>
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="font-medium text-gray-900">Booking:</span> <span
            className="font-medium text-gray-500">{`${bookingState.selectDates?.startDate} ~ ${bookingState.selectDates?.endDate}`}</span>
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="font-medium text-gray-900">Days:</span> <span
            className="font-medium text-gray-500">{`${bookingState.days} day${bookingState.days > 1 ? 's' : ''}`}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookingConfirmation
