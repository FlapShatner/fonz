import React from 'react'
import { cn } from '@/app/utils'
import GridImage from './grid-image'

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
  <div className={cn('w-full grid gap-2 px-2 grid-cols-2 ')}>
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
