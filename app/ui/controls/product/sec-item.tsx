import React from 'react'
import { useAtom } from 'jotai'
import { selectedSecVarAtom, productAtom } from '@/app/state/atoms'
import { VariantType } from '@/app/types/product-types'
import { Secondary } from '@/app/data/options'

type SetItemProps = {
 secItem: Secondary
 setOpen: (open: boolean) => void
}
function SecItem({ secItem, setOpen }: SetItemProps) {
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)

 const handleSelect = async () => {
  setSelectedSecVar(secItem)
  setOpen(false)
 }
 return (
  <div
   onClick={handleSelect}
   className='flex justify-between items-center p-2 border-b border-bg-primary cursor-pointer '>
   <span>{secItem.label}</span>
  </div>
 )
}
export default SecItem
