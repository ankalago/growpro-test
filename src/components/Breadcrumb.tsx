import React from 'react';
import HomeIcon from '../images/HomeIcon';
import SlashIcon from '../images/SlashIcon';
import { Types } from '../entities/bike';
import { Link } from 'react-router-dom';

type Props = {
  types: Types
  bike: string
}

const Breadcrumb: React.FC<Props> = ({types, bike}) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li className="text-sm">
          <div className="flex items-center">
            <Link to="/" className="font-medium text-gray-500 hover:text-gray-600">
              <HomeIcon/>
            </Link>
            <SlashIcon/>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <Link to={`/type/${types.value}`} className="mr-2 text-sm font-medium text-gray-900">
              {types.label}
            </Link>
            <SlashIcon/>
          </div>
        </li>
        <li className="text-sm">
          <span className="font-medium text-gray-500 hover:text-gray-600">
            {bike}
          </span>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
