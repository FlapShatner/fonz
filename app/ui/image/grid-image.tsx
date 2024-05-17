import React from 'react'
import { cn } from '@/app/utils'
// import { AdvancedImage } from '@cloudinary/react'
import { CldImage } from 'next-cloudinary'
import { useAtom } from 'jotai'
import { selectedImageAtom } from '@/app/state/atoms'

interface GridImageProps {
 isGrid: boolean
 img: {
  id: number
  label: string
  image: any
 }
}

function GridImage({ img, isGrid }: GridImageProps) {
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)

 const handleClick = () => {
  setSelectedImage(img)
  console.log(img.image)
 }

 return (
  <div className={cn('relative h-stack', isGrid && 'h-grid')}>
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
