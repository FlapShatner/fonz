import { atom } from 'jotai'
import { Customer } from '../types/customer-types'
import { VariantType } from '../types/product-types'

export const customerAtom = atom<Customer | undefined>(undefined)
customerAtom.debugLabel = 'customerAtom'

export const viewOpenAtom = atom(false)

export const productAtom = atom({
 id: '',
 title: '',
 handle: '',
 options: [
  {
   id: '',
   name: '',
   values: [''],
  },
 ],
 variants: {
  edges: [
   {
    node: {
     id: '',
     title: '',
     selectedOptions: [
      {
       name: '',
       value: '',
      },
     ],
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
productAtom.debugLabel = 'productAtom'

export const selectedFFAtom = atom({
 id: '',
 label: 'Choose a product type',
 handle: '',
})
selectedFFAtom.debugLabel = 'selectedFFAtom'

export const selectedSizeAtom = atom('')
selectedSizeAtom.debugLabel = 'selectedSizeAtom'

export const sizeFilteredAtom = atom([
 {
  node: {
   id: '',
   title: '',
   selectedOptions: [
    {
     name: '',
     value: '',
    },
   ],
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
])
sizeFilteredAtom.debugLabel = 'sizeFilteredAtom'

export const secVarDefault = {
 id: '',
 title: '',
 selectedOptions: [
  {
   name: '',
   value: '',
  },
 ],
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
}

export const selectedSecVarAtom = atom(secVarDefault)
selectedSecVarAtom.debugLabel = 'selectedSecVarAtom'

export const selectedStyleAtom = atom({
 id: 'none',
 label: 'None',
 prompt: ' ',
 img: '/none',
})

export const ffOpenAtom = atom(false)
export const sizeOpenAtom = atom(false)
export const secVarOpenAtom = atom(false)
export const showSecVarAtom = atom(false)
export const styleOpenAtom = atom(false)
