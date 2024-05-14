import React from 'react'
import { getProduct } from '@/app/storefront-api/products'
import { useAtom } from 'jotai'
import { selectedFFAtom, productAtom } from '../../state/atoms'
import { get } from 'http'

type FormFactorItemProps = {
 formFactor: {
  id: string
  label: string
  handle: string
 }
 setOpen: (open: boolean) => void
}

function FormFactorItem({ formFactor, setOpen }: FormFactorItemProps) {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const handleSelect = async () => {
  setProduct(await getProduct(formFactor.id))
  setSelectedFF(formFactor)
  setOpen(false)
 }
 console.log(product)
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
