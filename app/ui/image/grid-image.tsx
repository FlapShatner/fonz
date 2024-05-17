import React from 'react'
import { cn } from '@/app/utils'
import { CldImage } from 'next-cloudinary'
import { useAtom } from 'jotai'
import { selectedImageAtom } from '@/app/state/atoms'
import { CldImageType } from '@/app/types/image-types'

interface GridImageProps {
 isGrid: boolean
 img: {
  id: number
  label: string
  image: CldImageType
 }
}

function GridImage({ img, isGrid }: GridImageProps) {
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)

 const handleClick = () => {
  setSelectedImage(img)
  console.log(img.image)
 }

 return (
  <div className={cn('cursor-pointer relative', isGrid && 'h-grid', !isGrid && 'h-stack')}>
   <CldImage
    onClick={handleClick}
    className='object-contain  hover:border hover:border-accent rounded-md'
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
