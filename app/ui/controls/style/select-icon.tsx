import React from 'react'
import Image from 'next/image'
import NoneIcon from '@/app/icons/none'
import Chevron from '@/app/icons/chevron'

type SelectIconProps = {
 image: string
}

function SelectIcon({ image }: SelectIconProps) {
 return (
  <div>
   {image == '/none' ? (
    <div className='w-8 h-[34px] bg-bg-primary rounded-md flex items-center justify-center'>
     <NoneIcon />
    </div>
   ) : (
    <Image
     className='rounded-md'
     src={image}
     width='32'
     height='32'
     alt=''
    />
   )}
  </div>
 )
}

export default SelectIcon
