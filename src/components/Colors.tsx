import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { classNames, colors } from '../utils/utils';

type Props = {
  color: string[]
  setValue: Function
}

const Colors: React.FC<Props> = ({ color, setValue }) => {
  const [selectedColor, setSelectedColor] = useState<string>(color[0])

  useEffect(() => {
    setValue('color', selectedColor)
  }, [])

  const onChange = (value: string) => {
    setSelectedColor(value)
    setValue('color', value)
  }

  return (
    <RadioGroup value={selectedColor} onChange={onChange} className="mt-4">
      <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
      <div className="flex items-center space-x-3">
        {color.map((item) => (
          <RadioGroup.Option
            key={item}
            value={item}
            className={({ active, checked }) =>
              classNames(
                colors(item).selectedClass,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
              )
            }
          >
            <RadioGroup.Label as="span" className="sr-only">
              {colors(item).name}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={classNames(
                colors(item).class,
                'h-8 w-8 border border-black border-opacity-10 rounded-full'
              )}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

export default Colors
