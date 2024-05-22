import React from 'react'
import InfoDrawer from './info-drawer'
import { CldImage } from 'next-cloudinary'
import { useAtom } from 'jotai'
import { selectedImageAtom, generatedAtom } from '@/app/state/atoms'
import { options } from '@/app/data/options'

function Detail() {
 const [selectedImage] = useAtom(selectedImageAtom)

 return (
  <div className='flex flex-col h-full w-full'>
   <InfoDrawer />
   <CldImage
    src={selectedImage.img.image.publicID}
    className='object-contain'
    fill
    crop={{
     type: 'crop',
     width: 0.5,
     height: 0.5,
     gravity: selectedImage.img.image.gravity,
    }}
    alt={selectedImage.img.label}
   />
  </div>
 )
}

export default Detail
