import React from 'react'
import { cn } from '@/app/utils'
import Chevron from '@/app/icons/chevron'
import Info from '@/app/icons/info'
import { useAtom } from 'jotai'
import { selectedImageAtom, infoDrawerOpenAtom, generatedAtom } from '@/app/state/atoms'
import { options } from '@/app/data/options'
import { styleOptions } from '@/app/data/style-options'

function InfoDrawer({ className = '' }) {
 const [selectedImage] = useAtom(selectedImageAtom)
 const [infoDrawerOpen, setInfoDrawerOpen] = useAtom(infoDrawerOpenAtom)
 const [generated] = useAtom(generatedAtom)
 const isUpscaled = generated?.isUpscaled
 const ff = options.find((option) => option.id === (isUpscaled ? generated.ff : selectedImage.generated.ff))
 const style = styleOptions.find((style) => style.id === (isUpscaled ? generated.style : selectedImage.generated.style))
 const secVarLabel = isUpscaled ? generated.secVarLabel : selectedImage.generated.secVarLabel

 const handleClick = () => {
  setInfoDrawerOpen(!infoDrawerOpen)
 }

 return (
  <div
   onClick={handleClick}
   className={cn('flex flex-col cursor-pointer bg-bg-primary h-max w-max px-2 pb-1 rounded-br-md z-40 mr-auto', className)}>
   <div className='flex gap-2 items-center justify-between'>
    <p className='text-sm'>{isUpscaled ? generated.caption : selectedImage.generated.caption}</p>
    {isUpscaled && <p className='text-sm'>: Upscaled</p>}
    {infoDrawerOpen ? <Chevron className={cn('rotate-90')} /> : <Info className='w-4 text-white' />}
   </div>
   <div className={cn('opacity-100', !infoDrawerOpen && 'opacity-0 h-0 w-0')}>
    <p className='text-sm'>{ff?.label}</p>
    <p className='text-sm'>Size: {isUpscaled ? generated.size : selectedImage.generated.size} </p>
    {secVarLabel !== 'none' && (
     <p className='text-sm'>
      {secVarLabel === 'Color' && `T-Shirt`} {secVarLabel}: {isUpscaled ? generated.secVar.label : selectedImage.generated.secVar.label}
     </p>
    )}
    <p className='text-sm'>Style: {style?.label} </p>
   </div>
  </div>
 )
}

export default InfoDrawer
