import React from 'react'
import { useAtom } from 'jotai'
import { cn } from '@/app/utils'
import { selectedSecVarAtom, productAtom, selectedFFAtom } from '@/app/state/atoms'
import { VariantType } from '@/app/types/product-types'
import { Secondary } from '@/app/data/options'

type SetItemProps = {
 secItem: Secondary
 setOpen: (open: boolean) => void
}
function SecItem({ secItem, setOpen }: SetItemProps) {
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)

 const isColor = selectedFF.secondaryVariant === 'Color'

 const handleSelect = async () => {
  setSelectedSecVar(secItem)
  setOpen(false)
 }

 const swatchColor = () => {
  switch (secItem.label) {
   case 'Black':
    return 'bg-black'
   case 'White':
    return 'bg-white'
   case 'Red':
    return 'bg-red-600'
   case 'Blue':
    return 'bg-blue-700'
   case 'Grey':
    return 'bg-gray-700'
   case 'Brown':
    return 'bg-[#4a2500]'
   case 'Olive Green':
    return 'bg-lime-950'
   default:
    return 'bg-transparent'
  }
 }

 return (
  <div
   onClick={handleSelect}
   className='flex gap-2 items-center p-2 border-b border-bg-primary cursor-pointer '>
   <div className={cn('rounded-full w-4 h-4', swatchColor())} />
   <span>{secItem.label}</span>
  </div>
 )
}
export default SecItem
