import React from 'react'
import Chevron from '@/app/icons/chevron'
import { useAtom } from 'jotai'
import { selectedImageAtom } from '@/app/state/atoms'
import { options } from '@/app/data/options'
function InfoDrawer() {
 const [selectedImage] = useAtom(selectedImageAtom)
 const ff = options.find((option) => option.id === selectedImage.generated.ff)
 return (
  <div className='flex flex-col  bg-bg-primary w-max px-2 pb-1 rounded-br-md z-40 mr-auto'>
   <div className='flex gap-2 items-center justify-between'>
    <p className='text-sm'>{selectedImage.generated.caption}</p>
    <Chevron className='rotate-180' />
   </div>
   <div>
    <p className='text-sm'>{ff?.label}</p>
    <p className='text-sm'> {selectedImage.generated.size} </p>
    <p className='text-sm'> {selectedImage.generated.secVar.label} </p>
    <p className='text-sm'> {selectedImage.generated.style} </p>
   </div>
  </div>
 )
}

export default InfoDrawer
