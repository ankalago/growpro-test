import React from 'react';

type Props = {
  images: string[]
}

const Gallery: React.FC<Props> = ({images}) => {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={images[0]}
          alt={images[0]}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img
            src={images[1]}
            alt={images[1]}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img
            src={images[2]}
            alt={images[2]}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <img
          src={images[3]}
          alt={images[3]}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  )
}

export default Gallery
