import React from 'react'
import { cn } from '@/app/utils'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { CldImage } from 'next-cloudinary'
import { useAtom } from 'jotai'
import { selectedImageAtom, generatedAtom } from '@/app/state/atoms'
import { CldImageType } from '@/app/types/image-types'

interface GridImageProps {
 isGrid: boolean
 img: {
  id: number
  label: string
  image: CldImageType
 }
 index: number
}

function GridImage({ img, isGrid, index }: GridImageProps) {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)
 const [generated, setGenerated] = useAtom(generatedAtom)
 const handleClick = () => {
  const imageData = {
   index: index + 1,
   img: img,
   generated: generated,
  }
  setSelectedImage(imageData)
  console.log(imageData)
 }

 return (
  <div className={cn('cursor-pointer relative', isGrid && (isMobile ? 'h-mb-grid' : 'h-grid'), !isGrid && (isMobile ? 'h-mb-stack' : 'h-stack'))}>
   <CldImage
    onClick={handleClick}
    src={img.image.publicID}
    className='object-contain  hover:border hover:border-accent rounded-md'
    fill
    crop={{
     type: 'crop',
     width: 0.5,
     height: 0.5,
     gravity: img.image.gravity,
    }}
    alt={img.label}
   />
  </div>
 )
}

export default GridImage
