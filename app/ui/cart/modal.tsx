'use client'
import { useRef, useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import CloseButton from './close-button'
import { getCart } from '@/app/storefront-api/cart'
import { useOnClickOutside } from 'usehooks-ts'
import { useAtom } from 'jotai'
import { cartDataAtom, cartContentsAtom } from '@/app/state/atoms'
import { dollars } from '@/app/utils'
import LineItem from './line-item'

function Modal() {
 const [cartData, setCartData] = useAtom(cartDataAtom)
 const [cartContents, setCartContents] = useAtom(cartContentsAtom)
 const ref = useRef(null)
 const router = useRouter()
 const searchParams = useSearchParams()
 const modal = searchParams.get('modal')
 const pathname = usePathname()
 useOnClickOutside(ref, () => {
  router.push(pathname)
 })

 useEffect(() => {
  const retrieveCart = async () => {
   try {
    const cart = await getCart(cartData.cartId)
    setCartContents(cart)
   } catch (error) {
    console.error(error)
   }
  }
  if (cartData.hasCart) {
   retrieveCart()
  }
 }, [cartData])

 const cartEmpty = !cartData.hasCart
 const { checkoutUrl, lines, cost } = cartContents
 const lineItems = lines.edges
 return (
  <>
   {modal && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
     <div
      ref={ref}
      className='bg-bg-tertiary m-auto mx-8 p-8 pt-2 relative text-white rounded-lg'>
      <div className='flex flex-col items-center'>
       {lineItems.length <= 0 ? (
        <div className='text-xl py-4'>Cart Empty</div>
       ) : (
        <div>
         <div className='text-2xl text-accent py-4'>Shopping Cart</div>
         <div className='grid grid-cols-10 gap-x-4'>
          <div className='grid grid-cols-subgrid col-span-10 mb-2 border-b-2 border-accent-tr'>
           <div className=' font-semibold col-span-3 text-accent'>Product</div>
           <div className=' font-semibold col-span-3 text-center text-accent'>Quantity</div>
           <div className='col-span-1'></div>
           <div className=' font-semibold col-span-3 text-center text-accent'>Price</div>
          </div>
          {lineItems.map((lineItem) => (
           <LineItem
            key={lineItem.node.id}
            lineItem={lineItem}
           />
          ))}
          <div className='grid grid-cols-subgrid col-span-10'>
           <div className='col-span-7'></div>
           <div className='text-xl text-center text-accent col-span-3'>Total: {dollars.format(Number(cost.totalAmount.amount))}</div>
          </div>
         </div>
        </div>
       )}
      </div>
      <div className='flex gap-4 justify-end'>
       <div
        onClick={() => router.push(pathname)}
        className='cursor-pointer  text-2xl font-semibold text-accent border-2 border-accent w-max px-4 py-2 mt-4 rounded-md'>
        Cancel
       </div>
       <div className='cursor-pointer  text-2xl font-semibold text-bg-secondary bg-accent w-max px-4 py-2 mt-4 rounded-md border-2 border-accent'>
        Check Out
       </div>
      </div>
     </div>
    </dialog>
   )}
  </>
 )
}

export default Modal
