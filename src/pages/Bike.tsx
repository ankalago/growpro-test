import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Colors from '../components/Colors';
import Sizes from '../components/Sizes';
import { useQueryDataBike } from '../hooks/useQueryData';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;
import { useBooking } from '../hooks/useBooking';
import dayjs from 'dayjs';

interface Props {
}

const Bike: React.FC<Props> = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { status, data, error } = useQueryDataBike(slug)
  const [selectDates, setSelectDates] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date()
  });
  const { calculateBooking } = useBooking()

  const handleValueChange = (newValue: DateValueType) =>
    setSelectDates(newValue);

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  const [{ types, name, images, reviews, description, highlights, details, color, sizes }] = data

  const calculateBookingValue = calculateBooking(selectDates, types);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumb */}
        <Breadcrumb types={types} bike={name}/>

        {/* Image gallery */}
        <Gallery images={images}/>

        {/* Product info */}
        <div
          className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {calculateBookingValue.calculateValue.label}
              <span className="ml-2 text-sm font-medium text-gray-900 hover:text-gray-500">
                {calculateBookingValue.daysBooking.label}
              </span>
            </p>

            {/* Reviews */}
            <Reviews reviews={reviews} />

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
                  inputClassName="font-normal dark:bg-white dark:border dark:shadow-sm dark:text-gray-900 dark:border-gray-200"
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
          </div>

          {/* Description and details */}
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{description}</p>
              </div>
            </>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bike
