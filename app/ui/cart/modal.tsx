'use client'
import { useRef, useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import CloseButton from './close-button'
import { getCart } from '@/app/storefront-api/cart'
import { useOnClickOutside } from 'usehooks-ts'
import { useAtom } from 'jotai'
import { cartDataAtom, cartContentsAtom } from '@/app/state/atoms'
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
      className='bg-bg-tertiary m-auto p-8 pt-0 relative text-white rounded-lg'>
      <div className='flex flex-col items-center'>
       {cartEmpty ? (
        <div className='text-xl py-4'>Cart Empty</div>
       ) : (
        <div>
         <div className='text-xl py-4'>Cart</div>

         {lineItems.map((lineItem) => (
          <LineItem
           key={lineItem.node.id}
           lineItem={lineItem}
          />
         ))}
        </div>
       )}
      </div>
     </div>
    </dialog>
   )}
  </>
 )
}

export default Modal
