import React from 'react'
import { cn } from '@/app/utils'
import GridImage from './grid-image'
import InfoDrawer from './info-drawer'

interface GridProps {
 isGrid: boolean
 imageArray: {
  id: number
  label: string
  image: {
   publicID: string
   gravity: string
   productId: string
  }
 }[]
}

function Grid({ imageArray, isGrid }: GridProps) {
 return (
  <div className='w-full'>
   {/* <InfoDrawer className='absolute top-0 opacity-40' /> */}
   <div className={cn('w-full grid gap-2 px-2 grid-cols-2 ')}>
    {imageArray.map((img, i) => (
     <GridImage
      isGrid={isGrid}
      key={img.id}
      img={img}
      index={i}
     />
    ))}
   </div>
  </div>
 )
}

export default Grid
