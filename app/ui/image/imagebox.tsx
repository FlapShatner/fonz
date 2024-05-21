import React, { useEffect } from 'react'
import Image from 'next/image'
import Grid from './grid'
import Stack from './stack'

import { useAtom } from 'jotai'
import { generatedAtom, imageArrayAtom, isGridAtom, selectedSizeAtom, sizeFilteredAtom, selectedFFAtom, selectedSecVarAtom } from '@/app/state/atoms'

function ImageBox() {
 const [generated, setGenerate] = useAtom(generatedAtom)
 const [sizeFiltered] = useAtom(sizeFilteredAtom)
 const [selectedSecVar] = useAtom(selectedSecVarAtom)
 const [imageArray, setImageArray] = useAtom(imageArrayAtom)
 const [isGrid, setIsGrid] = useAtom(isGridAtom)

 const grid = selectedSecVar.grid

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

 const imgExists = generated && generated.imgData.publicId !== ''
 return (
  <div className='w-3/4 bg-announce rounded-md my-2 relative flex items-center '>
   {imgExists ? (
    isGrid ? (
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
    <Image
     className='object-contain overflow-hidden rounded-md opacity-10'
     src='/img/robotpaint.png'
     alt='robotpaint'
     fill={true}
    />
   )}
  </div>
 )
}

export default ImageBox
