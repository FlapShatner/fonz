import React from 'react'
import { cn } from '@/app/utils'
import Chevron from '@/app/icons/chevron'
import Info from '@/app/icons/info'
import { useAtom } from 'jotai'
import { selectedImageAtom, infoDrawerOpenAtom } from '@/app/state/atoms'
import { options } from '@/app/data/options'
import { styleOptions } from '@/app/data/style-options'
import Close from '@/app/icons/close'

function InfoDrawer() {
 const [selectedImage] = useAtom(selectedImageAtom)
 const [infoDrawerOpen, setInfoDrawerOpen] = useAtom(infoDrawerOpenAtom)
 const ff = options.find((option) => option.id === selectedImage.generated.ff)
 const style = styleOptions.find((style) => style.id === selectedImage.generated.style)
 const secVarLabel = selectedImage.generated.secVarLabel

 const handleClick = () => {
  setInfoDrawerOpen(!infoDrawerOpen)
 }

 return (
  <div
   onClick={handleClick}
   className='flex flex-col cursor-pointer bg-bg-primary w-max px-2 pb-1 rounded-br-md z-40 mr-auto'>
   <div className='flex gap-2 items-center justify-between'>
    <p className='text-sm'>{selectedImage.generated.caption}</p>

    {infoDrawerOpen ? <Chevron className={cn('rotate-90')} /> : <Info className='w-4 text-white' />}
   </div>
   <div className={cn('opacity-100', !infoDrawerOpen && 'opacity-0 h-0 w-0')}>
    <p className='text-sm'>{ff?.label}</p>
    <p className='text-sm'>Size: {selectedImage.generated.size} </p>
    {secVarLabel !== 'none' && (
     <p className='text-sm'>
      {secVarLabel === 'Color' && `T-Shirt`} {secVarLabel}: {selectedImage.generated.secVar.label}
     </p>
    )}
    <p className='text-sm'>Style: {style?.label} </p>
   </div>
  </div>
 )
}

export default InfoDrawer
