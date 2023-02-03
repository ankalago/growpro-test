import { Color } from '../entities/utils';

export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ')


export const colors = (color: string): Color => {
  switch (color) {
    case 'Yellow':
      return { name: color, class: 'bg-amber-400', selectedClass: 'ring-amber-200' }
    case 'Gray':
      return { name: color, class: 'bg-gray-200', selectedClass: 'ring-gray-400' }
    case 'Black':
      return { name: color, class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
    case 'Red':
      return { name: color, class: 'bg-rose-600', selectedClass: 'ring-rose-700' }
    case 'Blue':
      return { name: color, class: 'bg-indigo-500', selectedClass: 'ring-indigo-600' }
    case 'Orange':
      return { name: color, class: 'bg-orange-500', selectedClass: 'ring-orange-600' }
    case 'White':
    default:
      return { name: color, class: 'bg-slate-100', selectedClass: 'ring-slate-300' }
  }
}

export const shuffledItems = <T>(array: T[]) => {
  return array.sort(() =>  {
    return Math.random() - 0.5;
  })
};
