import React from 'react'
import { cn } from '@/app/utils'
import { getProduct } from '@/app/storefront-api/products'
import { useAtom } from 'jotai'
import { Option } from '@/app/data/options'
import { selectedFFAtom, productAtom, showSecVarAtom, selectedSizeAtom, selectedSecVarAtom } from '../../../state/atoms'

type FormFactorItemProps = {
 formFactor: Option
 setOpen: (open: boolean) => void
}

function FormFactorItem({ formFactor, setOpen }: FormFactorItemProps) {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [showSecVar, setShowSecVar] = useAtom(showSecVarAtom)
 const [selectedSize, setSelectedSize] = useAtom(selectedSizeAtom)
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)

 const handleSelect = async () => {
  const resProduct = await getProduct(formFactor.handle)
  setProduct(resProduct)
  setSelectedFF(formFactor)
  if (formFactor.variants.length === 1) {
   setSelectedSize(formFactor.variants[0])
  }
  setShowSecVar(false)
  setOpen(false)
 }

 return (
  <div
   onClick={handleSelect}
   key={formFactor.id}
   className={cn('flex justify-between items-center p-2 border-b border-bg-primary cursor-pointer', formFactor.disabled && 'opacity-30 pointer-events-none')}>
   <div>
    <span>{formFactor.label}</span>
    {formFactor.disabled && <p className='text-sm'>Coming Soon</p>}
   </div>
  </div>
 )
}

export default FormFactorItem
