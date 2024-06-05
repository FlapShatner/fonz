import React from 'react'
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
  <div className='flex'>
   <div
    onClick={handleAdd}
    className='cursor-pointer flex items-center p-2 border border-accent-tr hover:bg-accent-tr rounded-tl-md rounded-bl-md'>
    <Add className='w-4 text-white' />
   </div>
   <div className='flex items-center p-2 px-3 border border-accent-tr -mx-[1px]'>{quantity}</div>
   <div
    onClick={handleSubtract}
    className='cursor-pointer  flex items-center p-2 rounded-tr-md rounded-br-md border border-accent-tr hover:bg-accent-tr'>
    <Subtract className='w-4 text-white' />
   </div>
  </div>
 )
}

export default Quantity
