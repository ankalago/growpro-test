type Reviews = {
  average: number
  totalCount: number
};

export type Bike = {
  id: number
  name: string
  slug: string
  description: string
  details: string
  images: string[]
  color: string[]
  highlights: string[]
  brand: string
  types: number
  sizes: string[]
  price: number
  reviews: Reviews
  createdAt: number
}

export type Type = {
  id: number
  value: string
  label: string
}
