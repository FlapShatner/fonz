import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import StyleItem from './style-item'
import { styleOptions } from '@/app/data/style-options'
import { useAtom } from 'jotai'
import { styleOpenAtom } from '@/app/state/atoms'

function StyleList() {
 const ref = useRef(null)
 const [styleOpen, setStyleOpen] = useAtom(styleOpenAtom)
 useOnClickOutside(ref, () => {
  setStyleOpen(false)
 })
 return (
  <div className='bg-bg-tertiary rounded-md fixed p-2 grid grid-cols-3 gap-2 left-[23%] top-1/4 border border-bg-primary z-50'>
   {styleOptions.map((item) => (
    <StyleItem
     key={item.id}
     item={item}
    />
   ))}
  </div>
 )
}

export default StyleList
