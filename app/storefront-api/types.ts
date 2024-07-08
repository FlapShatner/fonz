export type ShopifyProduct = {
 id: string
 handle: string
 availableForSale: boolean
 title: string
 description: string
 descriptionHtml: string
 options: ProductOption[]
 productType: string
 priceRange: {
  maxVariantPrice: Money
  minVariantPrice: Money
 }
 variants: Connection<ProductVariant>
 featuredImage: Image
 images: Connection<Image>
 tags: string[]
 updatedAt: string
}

export type Money = {
 amount: string
 currencyCode?: string
}

export type Connection<T> = {
 edges: Array<Edge<T>>
}

export type Edge<T> = {
 node: T
}

export type ProductVariant = {
 id: string
 title: string
 availableForSale: boolean
 selectedOptions: {
  name: string
  value: string
 }[]
 price: Money
}

export interface Product {
 node: {
  id: string
  handle: string
  availableForSale: boolean
  title: string
  description: string
  options: ProductOption[]
  productType: string
  priceRange: PriceRange
  variants: {
   edges: VariantEdge[]
  }
  featuredImage: Image
  images: {
   edges: ImageEdge[]
  }
  tags: string[]
  updatedAt: string
 }
}

export interface ProductOption {
 id: string
 name: string
 values: string[]
}

export interface PriceRange {
 maxVariantPrice: Price
 minVariantPrice: Price
}

export interface Price {
 amount: string
 currencyCode: string
}

export interface VariantEdge {
 node: Variant
}

export interface Variant {
 id: string
 title: string
 availableForSale: boolean
 selectedOptions: SelectedOption[]
 price: Price
}

export interface SelectedOption {
 name: string
 value: string
}

export interface Image {
 url: string
 altText: string | null
 width: number
 height: number
}

export interface ImageEdge {
 node: Image
}
