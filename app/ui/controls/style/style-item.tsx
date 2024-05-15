import React from 'react'
import Image from 'next/image'
import Check from '@/app/icons/check'
import { cn } from '@/app/utils'
import { useAtom } from 'jotai'
import { selectedStyleAtom } from '@/app/state/atoms'

type StyleItem = { id: string; label: string; prompt: string; img: string }

type StyleItemProps = {
 item: StyleItem
}

function StyleItem({ item }: StyleItemProps) {
 const [selectedStyle, setSelectedStyle] = useAtom(selectedStyleAtom)

 const handleClick = () => {
  setSelectedStyle(item)
 }

 const isSelected = selectedStyle.id === item.id

 return (
  <div
   onClick={handleClick}
   className={cn('w-24 h-[101px] bg-black rounded-md relative flex items-end justify-center cursor-pointer m-[1px]')}>
   <div className={cn('absolute h-[101px]')}>
    {isSelected && <Check className='absolute top-1 right-1 rounded-full bg-accent-bright w-max p-[1px] text-bg-primary' />}
    {item.id != 'none' ? (
     <Image
      className='rounded-md'
      src={item.img}
      width='96'
      height='96'
      alt=''
     />
    ) : (
     <div className='w-24 h-24 bg-transparent' />
    )}
   </div>
   <span className={cn('text-sm z-20 bg-bg-primary w-full text-center rounded-br-md rounded-bl-md', isSelected && ' mx-[1px] mb-[1px]')}>{item.label}</span>
   {isSelected && <div className='border border-accent absolute w-full h-full rounded-md' />}
  </div>
 )
}

export default StyleItem
