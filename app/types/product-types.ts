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
 selectedOptions: SelectedOptionType[]
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

export type SelectedOptionType = {
 name: string
 value: string
}

export type FFType = {
 id: string
 label: string
 handle: string
 ar?: string
 idCode?: string
 grid?: boolean
}

export type SelectedOption = {
 name: string
 value: string
}

export type ProductVariant = {
 id: string
 selectedOptions: SelectedOption[]
 title: string
 price: {
  amount: string
 }
 product: {
  handle: string
  title: string
  id: string
 }
}

// {
//     id: '',
//     label: 'Choose a product type',
//     handle: '',
//     ar: '',
//     idCode: '',
//     grid: false,
//    }
