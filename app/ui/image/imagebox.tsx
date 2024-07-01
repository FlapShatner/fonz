import React, { useEffect } from 'react'
import Image from 'next/image'
import Grid from './grid'
import Stack from './stack'
import { cn } from '@/app/utils'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { useAtom } from 'jotai'
import {
 generatedAtom,
 imageArrayAtom,
 isGridAtom,
 selectedSizeAtom,
 sizeFilteredAtom,
 selectedImageAtom,
 selectedSecVarAtom,
 isLoadingAtom,
 isUpscalingAtom,
} from '@/app/state/atoms'
import Detail from './detail'
import Squares from '@/app/common/squares'
import Progress from './progress'
import Upscaled from './upscaled'

function ImageBox() {
 const [generated, setGenerate] = useAtom(generatedAtom)
 const [sizeFiltered] = useAtom(sizeFilteredAtom)
 const [selectedSecVar] = useAtom(selectedSecVarAtom)
 const [imageArray, setImageArray] = useAtom(imageArrayAtom)
 const [isGrid, setIsGrid] = useAtom(isGridAtom)
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)
 const [isUpscaling, setIsUpscaling] = useAtom(isUpscalingAtom)
 const [isLoading] = useAtom(isLoadingAtom)

 const { isMobile, isTablet, isDesktop } = useBreakPoints()

 const grid = selectedSecVar ? selectedSecVar.grid : true

 useEffect(() => {
  setIsGrid(grid)
  const arr = () => {
   const transformations = {
    topleft: 'north_west',
    topright: 'north_east',
    btmleft: 'south_west',
    btmright: 'south_east',
   }

   return Object.entries(transformations).map(([key, value], i) => {
    const image = { publicID: generated.imgData.publicId, gravity: value, productId: generated.productId }
    return { id: i, label: key, image: image }
   })
  }
  setImageArray(arr)
 }, [generated])
 if (!generated) return null

 const isUpscaled = generated && generated.isUpscaled
 const imgExists = generated && generated.imgData.publicId !== ''
 const showDetail = selectedImage.img && selectedImage.img.label != ''
 return (
  <div className={cn('w-3/4 bg-announce rounded-md my-2 relative flex items-center', isMobile && 'w-mb-img-w min-h-[50vh] m-auto')}>
   {imgExists ? (
    showDetail ? (
     <Detail />
    ) : isUpscaled ? (
     <Upscaled />
    ) : isGrid ? (
     <Grid
      isGrid={isGrid}
      imageArray={imageArray}
     />
    ) : (
     <Stack
      isGrid={isGrid}
      imageArray={imageArray}
     />
    )
   ) : (
    <div className='w-full h-full'>
     <Image
      className='object-contain overflow-hidden rounded-md opacity-10'
      src='/img/robotpaint.png'
      alt='robotpaint'
      fill={true}
     />
     {isLoading && (
      <div className='w-full h-full flex'>
       <Squares />
       {!isUpscaling && <Progress />}
      </div>
     )}
    </div>
   )}
  </div>
 )
}

export default ImageBox
