import React, { useRef } from 'react'
import SelectIcon from './select-icon'
import Chevron from '@/app/icons/chevron'
import StyleList from './style-list'
import { useOnClickOutside } from 'usehooks-ts'
import { cn } from '@/app/utils'
import { useAtom } from 'jotai'
import { styleOpenAtom, selectedStyleAtom } from '@/app/state/atoms'
import { skateboard } from '@cloudinary/url-gen/qualifiers/focusOn'

function StyleSelect() {
 const ref = useRef(null)
 const [styleOpen, setStyleOpen] = useAtom(styleOpenAtom)
 const [selectedStyle] = useAtom(selectedStyleAtom)
 useOnClickOutside(ref, () => {
  setStyleOpen(false)
 })
 const handleClick = () => {
  setStyleOpen(!styleOpen && true)
 }
 return (
  <div ref={ref}>
   <div className='text-lg pl-2'>Style</div>
   <div
    onClick={handleClick}
    className='bg-bg-tertiary mx-2 mt-2 p-1 rounded-md flex items-center justify-between pr-4 cursor-pointer'>
    <div className='flex items-center gap-4'>
     <SelectIcon image={selectedStyle.img} />
     <span>{selectedStyle.label}</span>
    </div>
    <Chevron className={cn('-rotate-90', styleOpen && '-rotate-180')} />
   </div>
   {styleOpen && <StyleList />}
  </div>
 )
}

export default StyleSelect
