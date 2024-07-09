import React, { Suspense } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/common/carousel'
import { useAtom } from 'jotai'
import { recsAtom } from '@/app/state/atoms'
import Spinner from '../spinner/spinner'
import RecsItem from './recs-item'

const Loader = () => {
 return (
  <div className='w-[200px] h-[200px] flex justify-center items-center border-2 rounded-md border-accent-tr'>
   <Spinner />
  </div>
 )
}

function RecsCarousel() {
 const [recs, setRecs] = useAtom(recsAtom)
 if (!recs) return null

 return (
  <Carousel className='mt-4'>
   <CarouselContent>
    {recs.map((rec) => (
     <CarouselItem
      className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 flex flex-col justify-center items-center'
      key={rec.node.id}>
      <Suspense fallback={<Loader />}>
       <RecsItem {...rec} />
      </Suspense>
     </CarouselItem>
    ))}
   </CarouselContent>
   <CarouselPrevious className='-left-4 text-accent border-2 border-accent hover:text-bg-primary' />
   <CarouselNext className='-right-4 text-accent border-2 border-accent  hover:text-bg-primary' />
  </Carousel>
 )
}

export default RecsCarousel
