import React from 'react';
import { useQueryDataBikes, useQueryDataTypes } from '../hooks/useQueryData';
import { Link } from 'react-router-dom';
import { shuffledItems } from '../utils/utils';
import { BikeType } from '../entities/bike';

const Footer: React.FC = () => {
  const { data: dataTypes } = useQueryDataTypes()
  const { data: dataBikes } = useQueryDataBikes()

  return (
    <div className="bg-white">
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-3 gap-y-10 gap-x-8 py-16">
            <div className="col-start-2 grid grid-cols-4 col-span-2 gap-x-8">
              {shuffledItems<BikeType>(dataBikes || []).slice(0, 4).map((bike) => (
                <div key={bike.name} className="group relative text-base sm:text-sm">
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                      src={bike.images[0]}
                      alt={bike.name}
                      className="object-cover object-center"
                    />
                  </div>
                  <Link to={`/bicycle/${bike.slug}`} className="mt-6 block font-medium text-gray-900">
                    <span className="absolute inset-0 z-10" aria-hidden="true"/>
                    {bike.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="row-start-1 grid grid-cols-1 gap-y-10 gap-x-8 text-sm">
              <p className="font-medium text-gray-900 text-2xl">
                Types
              </p>
              <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                {dataTypes?.map((types) => (
                  <li key={types.value} className="flex">
                    <Link to={`/type/${types.value}`} className="hover:text-gray-800">
                      {types.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
