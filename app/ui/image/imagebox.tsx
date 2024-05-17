import React from 'react'
import Image from 'next/image'
import Grid from './grid'

import { useAtom } from 'jotai'
import { generatedAtom } from '@/app/state/atoms'

function ImageBox() {
 const [generated] = useAtom(generatedAtom)

 const imgExists = generated && generated.imgData.publicId !== ''
 return (
  <div className='w-3/4 bg-announce rounded-md my-2 relative flex items-center '>
   {imgExists ? (
    <Grid />
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
