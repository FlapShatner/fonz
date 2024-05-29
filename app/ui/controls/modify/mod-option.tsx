import React from 'react'
import { cn } from '@/app/utils'

type ModOptionProps = {
 option: {
  id: string
  label: string
  goBack?: () => void
  makeVariations?: () => void
  upscale?: () => void
 }
}

function ModOption({ option }: ModOptionProps) {
 const handleClick = () => {
  if (option.id === 'back') {
   option.goBack && option.goBack()
  }
  if (option.id === 'vars') {
   option.makeVariations && option.makeVariations()
  }
  if (option.id === 'upscale') {
   option.upscale && option.upscale()
  }
 }
 return (
  <div className='relative'>
   <div
    onClick={handleClick}
    className={cn(
     'bg-bg-tertiary mx-2 mt-2 py-2 px-2 rounded-md flex items-center justify-between pr-4 cursor-pointer border border-transparent hover:border-accent '
    )}>
    {option.label}
   </div>
  </div>
 )
}

export default ModOption
