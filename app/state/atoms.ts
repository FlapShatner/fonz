import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Customer } from '../types/customer-types'
import { FFType } from '../types/product-types'
import { Generated, CldImageType } from '../types/image-types'
import { CloudinaryImage } from '@cloudinary/url-gen/index'
import { Option, Secondary, Variant } from '../data/options'

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
 label: 'Select Product',
 handle: '',
 variants: [],
 secondaryVariant: '',
} as Option)
selectedFFAtom.debugLabel = 'selectedFFAtom'

export const selectedSizeAtom = atom({
 size: 'Select Size',
 secondary: [],
} as Variant)
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
 label: '',
 ar: '',
 grid: false,
}

export const selectedSecVarAtom = atom(secVarDefault as Secondary)
selectedSecVarAtom.debugLabel = 'selectedSecVarAtom'

export const selectedStyleAtom = atom({
 id: 'none',
 label: 'None',
 prompt: '',
 img: '/none',
})

export const promptAtom = atom('')
promptAtom.debugLabel = 'promptAtom'

export const generatedDefault = {
 imgData: {
  publicId: '',
  url: '',
 },
 productId: '',
 isGrid: false,
 meta: '',
 caption: '',
 prompt: '',
}

export const generatedAtom = atom<Generated>(generatedDefault)
generatedAtom.debugLabel = 'generatedAtom'
export const imageArrayAtom = atom([
 {
  id: 0,
  label: '',
  image: {} as CldImageType,
 },
 {
  id: 1,
  label: '',
  image: {} as CldImageType,
 },
 {
  id: 2,
  label: '',
  image: {} as CldImageType,
 },
 {
  id: 3,
  label: '',
  image: {} as CldImageType,
 },
])
imageArrayAtom.debugLabel = 'imageArrayAtom'

export const isGridAtom = atom(false)
isGridAtom.debugLabel = 'isGridAtom'

export const selectedImageAtom = atom({
 id: 0,
 label: '',
 image: {} as CldImageType,
})
selectedImageAtom.debugLabel = 'selectedImageAtom'

export const selectedVariantAtom = atom({
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
})
selectedVariantAtom.debugLabel = 'selectedVariantAtom'

export const wsIdAtom = atom('')
wsIdAtom.debugLabel = 'wsIdAtom'
export const wsMessageAtom = atom({ event: '', data: '', id: '' })
wsMessageAtom.debugLabel = 'wsMessageAtom'

export const ffOpenAtom = atom(false)
export const sizeOpenAtom = atom(false)
export const secVarOpenAtom = atom(false)
export const showSecVarAtom = atom(false)
export const styleOpenAtom = atom(false)

export const generateErrorAtom = atom({
 error: false,
 message: '',
})
generateErrorAtom.debugLabel = 'generateErrorAtom'

const defaultHistory = {
 event: '',
 prompt: '',
 productId: '',
 isGrid: false,
 caption: '',
 style: '',
 id: '',
}

export const promptHistoryAtom = atomWithStorage('promptHistory', [defaultHistory])
promptHistoryAtom.debugLabel = 'promptHistoryAtom'
