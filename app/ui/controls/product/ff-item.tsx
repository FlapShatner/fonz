import React from 'react'
import { getProduct } from '@/app/storefront-api/products'
import { useAtom } from 'jotai'
import { selectedFFAtom, productAtom, showSecVarAtom } from '../../../state/atoms'

type FormFactorItemProps = {
 formFactor: {
  id: string
  label: string
  handle: string
  ar?: string
  idCode?: string
  grid?: boolean
 }
 setOpen: (open: boolean) => void
}

function FormFactorItem({ formFactor, setOpen }: FormFactorItemProps) {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)

 const handleSelect = async () => {
  const resProduct = await getProduct(formFactor.id)
  setProduct(resProduct)
  setSelectedFF(formFactor)
  setShowSecVar(false)
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
