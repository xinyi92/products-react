export interface ProductRespondModel {
  products: ProductModel[]
  total: number
  skip: number
  limit: number
}

export interface ProductModel {
  id?: number
  title?: string
  description?: string
  category?: string
  price?: number
  discountPercentage?: number
  rating?: number
  stock?: number
  tags?: string[]
  brand?: string
  sku?: string
  weight?: number
  dimensions?: DimensionModel
  warrantyInformation?: string
  shippingInformation?: string
  availabilityStatus?: string
  reviews?: ReviewModel[]
  returnPolicy?: string
  minimumOrderQuantity?: number
  meta?: MetaModel
  images?: string[]
  thumbnail?: string
}

export interface DimensionModel {
  width?: number
  height?: number
  depth?: number
}

export interface ReviewModel {
  rating?: number
  comment?: string
  date?: string
  reviewerName?: string
  reviewerEmail?: string
}

export interface MetaModel {
  createdAt?: string
  updatedAt?: string
  barcode?: string
  qrCode?: string
}

export interface NewProductForm {
    title: string
    price: number
}
