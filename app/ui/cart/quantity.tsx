import React from 'react'
import { cn } from '@/app/utils'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { updateCartLine } from '@/app/storefront-api/cart'
import Subtract from '@/app/icons/subtract'
import Add from '@/app/icons/add'
import { useAtom } from 'jotai'
import { cartDataAtom, cartContentsAtom } from '@/app/state/atoms'

type QuantityProps = {
 quantity: number
 lineItem: {
  id: string
  attributes: {
   key: string
   value: string
  }[]
  cost: {
   totalAmount: {
    amount: string
   }
  }
  merchandise: {
   product: {
    title: string
   }
   selectedOptions: {
    name: string
    value: string
   }[]
   title: string
  }
  quantity: number
 }
}

function Quantity({ quantity, lineItem }: QuantityProps) {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
 const [cartData, setCartData] = useAtom(cartDataAtom)
 const handleAdd = async () => {
  const updatedCart = await updateCartLine(cartData.cartId, lineItem.id, { quantity: quantity + 1, attributes: lineItem.attributes })
  setCartData({
   cartId: updatedCart.id,
   hasCart: true,
  })
 }
 const handleSubtract = async () => {
  const newQuantity = quantity >= 0 ? quantity - 1 : 0
  const updatedCart = await updateCartLine(cartData.cartId, lineItem.id, { quantity: newQuantity, attributes: lineItem.attributes })
  setCartData({
   cartId: updatedCart.id,
   hasCart: true,
  })
 }
 return (
  <div className={cn('flex')}>
   <div
    onClick={handleAdd}
    className={cn('cursor-pointer flex items-center p-1 border border-accent-tr hover:bg-accent-tr rounded-tl-md rounded-bl-md')}>
    <Add className='w-4 text-white' />
   </div>
   <div className={cn('flex items-center p-1 px-2 border border-accent-tr -mx-[1px]')}>{quantity}</div>
   <div
    onClick={handleSubtract}
    className='cursor-pointer  flex items-center p-1 rounded-tr-md rounded-br-md border border-accent-tr hover:bg-accent-tr'>
    <Subtract className='w-4 text-white' />
   </div>
  </div>
 )
}

export default Quantity
