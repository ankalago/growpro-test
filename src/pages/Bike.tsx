import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import { useQueryDataBike } from '../hooks/useQueryData';
import { useBooking } from '../hooks/useBooking';
import Booking from '../components/Booking';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../store/store';
import { setCostBooking } from '../store/states/booking';

interface Props {
}

const Bike: React.FC<Props> = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { status, data, error } = useQueryDataBike(slug)
  const { calculateBooking } = useBooking()
  const bookingState = useSelector((store: AppStore) => store.booking)
  const dispatch = useDispatch()

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  const [{ types, name, images, reviews, description, highlights, details, color, sizes }] = data

  const calculateBookingValue = calculateBooking(bookingState.selectDates, types);

  useEffect(() => {
    dispatch(setCostBooking(calculateBookingValue.calculateValue.value))
  }, [calculateBookingValue.calculateValue.value])

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

            <Booking color={color} sizes={sizes}/>
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
