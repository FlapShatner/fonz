import { atom } from 'jotai'
import { ProductType } from '../types/product-types'

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
