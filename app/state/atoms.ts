import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Customer } from '../types/customer-types'
import { FFType } from '../types/product-types'
import { Generated, CldImageType } from '../types/image-types'
import { CloudinaryImage } from '@cloudinary/url-gen/index'

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
 label: 'Choose a product',
 handle: '',
 ar: '',
 idCode: '',
 grid: false,
} as FFType)
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

export const selectedImageAtom = atom({
 id: 0,
 label: '',
 image: {} as CldImageType,
})
selectedImageAtom.debugLabel = 'selectedImageAtom'

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

export const promptHistoryAtom = atomWithStorage<string[]>('promptHistory', [])
promptHistoryAtom.debugLabel = 'promptHistoryAtom'
