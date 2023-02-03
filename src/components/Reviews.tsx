import React from 'react';
import { ReviewsType } from '../entities/bike';
import { StarIcon } from '@heroicons/react/20/solid';
import { classNames } from '../utils/utils';

type Props = {
  reviews: ReviewsType
}

const Reviews: React.FC<Props> = ({reviews}) => {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                'h-5 w-5 flex-shrink-0'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{reviews.average} out of 5 stars</p>
        <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </span>
      </div>
    </div>
  )
}

export default Reviews
