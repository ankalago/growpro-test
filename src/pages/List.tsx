import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQueryDataBikes, useQueryDataTypes } from '../hooks/useQueryData';

interface Props {
}

const List: React.FC<Props> = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { data: dataTypes } = useQueryDataTypes()
  const { status, data: dataBikes, error } = useQueryDataBikes(slug)

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  const getType = (slug: string) => {
    const findType = dataTypes?.find(type => type.value === slug);
    return findType ? `(${findType?.label})` : '';
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-6 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Bikes {getType(slug)}</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {dataBikes.map((bike) => (
            <div key={bike.id} className="group relative">
              <div
                className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={bike.images[0]}
                  alt={bike.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/bicycle/${bike.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0"/>
                      {bike.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{bike.color.join(" ")}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${bike.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
