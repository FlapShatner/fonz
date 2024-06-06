import React from 'react'
import { cn } from '@/app/utils'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
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
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
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
