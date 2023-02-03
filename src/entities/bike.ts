export type ReviewsType = {
  average: number
  totalCount: number
};

export type BikeType = {
  id: number
  name: string
  slug: string
  description: string
  details: string
  images: string[]
  color: string[]
  highlights: string[]
  brand: string
  types: Types
  sizes: string[]
  price: number
  reviews: ReviewsType
  createdAt: number
}

export type Types = {
  id: number
  value: string
  label: string
  daysPromo: number
}
