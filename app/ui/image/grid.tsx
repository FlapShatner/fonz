import React, { useEffect } from 'react'
import { cn } from '@/app/utils'
import GridImage from './grid-image'
import { useAtom } from 'jotai'
import { generatedAtom, imageArrayAtom } from '@/app/state/atoms'

function Grid() {
 const [generated] = useAtom(generatedAtom)
 const [imageArray, setImageArray] = useAtom(imageArrayAtom)
 useEffect(() => {
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
 const isGrid = generated.isGrid
 return (
  <div className={cn('w-full grid grid-cols-2 gap-2 px-2', !isGrid && 'grid-cols-1')}>
   {imageArray.map((img) => (
    <GridImage
     isGrid={isGrid}
     key={img.id}
     img={img}
    />
   ))}
  </div>
 )
}

export default Grid
