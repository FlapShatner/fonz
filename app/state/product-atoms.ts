import { atom } from 'jotai'
import { ProductType } from '../types/product-types'

export const viewOpenAtom = atom(false)

export const productAtom = atom({
 id: '',
 title: '',
 handle: '',
 variants: {
  edges: [
   {
    node: {
     id: '',
     title: '',
     metafields: [
      {
       id: '',
       key: '',
       value: '',
      },
     ],
     price: {
      amount: '',
     },
    },
   },
  ],
 },
})

export const selectedFFAtom = atom({
 id: '',
 label: 'Choose a product type',
 handle: '',
})
