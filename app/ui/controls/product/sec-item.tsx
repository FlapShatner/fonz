import React from 'react'
import { useAtom } from 'jotai'
import { selectedSecVarAtom, productAtom } from '@/app/state/atoms'
import { VariantType } from '@/app/types/product-types'

type SetItemProps = {
 secItem: VariantType
 setOpen: (open: boolean) => void
}
function SecItem({ secItem, setOpen }: SetItemProps) {
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)
 const label = secItem.selectedOptions.find((o) => o.name != 'Size')
 const handleSelect = async () => {
  setSelectedSecVar(secItem)
  setOpen(false)
 }
 return (
  <div
   onClick={handleSelect}
   className='flex justify-between items-center p-2 border-b border-bg-primary cursor-pointer '>
   <span>{label?.value}</span>
  </div>
 )
}
export default SecItem
