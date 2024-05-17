import React from 'react'
import { Generated } from '@/app/types/image-types'
// import { AdvancedImage } from '@cloudinary/react'
import { CldImage } from 'next-cloudinary'
import { useAtom } from 'jotai'
import { selectedImageAtom } from '@/app/state/atoms'

interface GridImageProps {
 img: {
  id: number
  label: string
  image: any
 }
}

function GridImage({ img }: GridImageProps) {
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)

 const handleClick = () => {
  setSelectedImage(img)
  console.log(img.image)
 }

 return (
  <div className='max-h-grid w-full relative'>
   <CldImage
    onClick={handleClick}
    className='object-contain'
    fill
    crop={{
     type: 'crop',
     width: 0.5,
     height: 0.5,
     gravity: img.image.gravity,
    }}
    alt={img.label}
    src={img.image.publicID}
   />
  </div>
 )
}

export default GridImage
