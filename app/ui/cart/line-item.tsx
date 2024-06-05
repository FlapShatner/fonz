import React from 'react'
import { cn } from '@/app/utils'
import Trash from '@/app/icons/trash'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { removeCartLine } from '@/app/storefront-api/cart'
import { dollars } from '@/app/utils'
import Quantity from './quantity'
import { cartDataAtom } from '@/app/state/atoms'

type LineItemProps = {
 lineItem: {
  node: {
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
}

function LineItem({ lineItem }: LineItemProps) {
 const [cartData, setCartData] = useAtom(cartDataAtom)
 const { merchandise, cost, quantity, attributes, id } = lineItem.node
 const size = merchandise.selectedOptions.find((option) => option.name === 'Size') || { value: 'N/A' }
 const hasVariant = merchandise.selectedOptions.length > 1

 const handleDelete = async () => {
  const updatedCart = await removeCartLine(cartData.cartId, id)
  setCartData({
   cartId: updatedCart.id,
   hasCart: true,
  })
 }

 return (
  <div className='grid grid-cols-subgrid col-span-10 border-b border-accent-tr py-1'>
   <div className='flex gap-2 col-span-3 '>
    {attributes.length > 0 && (
     <Image
      className='max-h-20 max-w-20 object-contain border border-accent-tr rounded-md'
      src={attributes[0].value}
      width={150}
      height={150}
      alt={merchandise.product.title}
     />
    )}
    <div className=' col-span-3'>
     <p>{merchandise.product.title}</p>
     <p>Size: {size.value}</p>
     {hasVariant && <p>Variant: {merchandise.selectedOptions[1].value}</p>}
    </div>
   </div>
   <div className='flex justify-center items-center  col-span-3'>
    <Quantity
     lineItem={lineItem.node}
     quantity={quantity}
    />
   </div>
   <div
    onClick={handleDelete}
    className='flex items-center justify-center col-span-1 w-full cursor-pointer  '>
    <Trash className='w-8 text-red-500 hover:text-red-600 ' />
   </div>
   <div className='flex justify-center items-center  col-span-3'>{dollars.format(Number(cost.totalAmount.amount))}</div>
  </div>
 )
}

export default LineItem
