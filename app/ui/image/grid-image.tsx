import React from 'react'
import { Generated } from '@/app/types/image-types'
import { AdvancedImage } from '@cloudinary/react'

interface GridImageProps {
 img: {
  id: number
  label: string
  image: any
 }
}

function GridImage({ img }: GridImageProps) {
 return (
  <div>
   <AdvancedImage
    className='max-h-grid'
    cldImg={img.image}
   />
  </div>
 )
}

export default GridImage
