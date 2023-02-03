import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { classNames, colors } from '../utils/utils';
import { SIZES } from '../constants';
import StrokeIcon from '../images/StrokeIcon';

type Props = {
  sizes: string[]
}

const Colors: React.FC<Props> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[2])

  return (
    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
      <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        {SIZES.filter(item => sizes.some(size => size === item)).map((item) => {
          const inStock = sizes.some(size => size === item)
          return (
            <RadioGroup.Option
              key={item}
              value={item}
              disabled={!inStock}
              className={({ active }) =>
                classNames(
                  inStock
                    ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                    : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                  active ? 'ring-2 ring-indigo-500' : '',
                  'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="span">{item}</RadioGroup.Label>
                  {inStock ? (
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-indigo-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-md'
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                      <StrokeIcon/>
                    </span>
                  )}
                </>
              )}
            </RadioGroup.Option>
          )
        })}
      </div>
    </RadioGroup>
  )
}

export default Colors
