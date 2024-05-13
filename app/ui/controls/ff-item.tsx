import React from 'react'
import { useAtom } from 'jotai'
import { selectedFFAtom } from '../../state/product-atoms'
type FormFactorItemProps = {
 formFactor: {
  id: string
  label: string
  handle: string
 }
 setOpen: (open: boolean) => void
}

function FormFactorItem({ formFactor, setOpen }: FormFactorItemProps) {
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const handleSelect = () => {
  setSelectedFF(formFactor)
  setOpen(false)
 }
 return (
  <div
   onClick={handleSelect}
   key={formFactor.id}
   className='flex justify-between items-center p-2 border-b border-bg-primary cursor-pointer '>
   <span>{formFactor.label}</span>
  </div>
 )
}

export default FormFactorItem
