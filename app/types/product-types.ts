export type ProductType = {
 id: string
 title: string
 handle: string
 variants: {
  edges: {
   node: VariantNodeType[]
  }[]
 }
}
export type VariantType = {
 id: string
 title: string
 metafields: MetafieldType[]
 price: PriceType
}
export type MetafieldType = {
 id: string
 key: string
 value: string
}
export type PriceType = {
 amount: string
}
export type VariantNodeType = {
 node: VariantType
}
