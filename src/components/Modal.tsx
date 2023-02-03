import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux';
import { AppStore } from '../store/store';

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  okAction: () => void
}

const Modal: React.FC<Props> = ({ open, setOpen, okAction }) => {
  const bookingState = useSelector((store: AppStore) => store.booking)

  useEffect(() => {
    setOpen(open)
  }, [open])

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
                          <span className="font-medium text-gray-900">Cost:</span> <span className="font-bold text-gray-500">${bookingState.cost}</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p>
                          <span className="font-medium text-gray-900">Name:</span> <span className="font-medium text-gray-500">{bookingState.name}</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p>
                          <span className="font-medium text-gray-900">Email:</span> <span className="font-medium text-gray-500">{bookingState.email}</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p>
                          <span className="font-medium text-gray-900">Phone:</span> <span className="font-medium text-gray-500">{bookingState.phone}</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p>
                          <span className="font-medium text-gray-900">Color:</span> <span className="font-medium text-gray-500">{bookingState.color}</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p>
                          <span className="font-medium text-gray-900">Size:</span> <span className="font-medium text-gray-500">{bookingState.size}</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p>
                          <span className="font-medium text-gray-900">Booking:</span> <span className="font-medium text-gray-500">{`${bookingState.selectDates?.startDate} ~ ${bookingState.selectDates?.endDate}`}</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <p>
                          <span className="font-medium text-gray-900">Days:</span> <span className="font-medium text-gray-500">{`${bookingState.days} day${bookingState.days > 1 ? 's': ''}`}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(false)
                      okAction()
                    }}
                  >
                    Book
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
