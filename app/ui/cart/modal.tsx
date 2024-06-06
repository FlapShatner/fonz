'use client'
import { useRef, useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { cn } from '@/app/utils'
import Link from 'next/link'
import CartButton from './cart-button'
import { getCart } from '@/app/storefront-api/cart'
import { useOnClickOutside } from 'usehooks-ts'
import { useAtom } from 'jotai'
import { cartDataAtom, cartContentsAtom } from '@/app/state/atoms'
import { dollars } from '@/app/utils'
import LineItem from './line-item'

function Modal() {
 const { isMobile, isTablet, isDesktop } = useBreakPoints()
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
 const { checkoutUrl, lines, cost, id } = cartContents
 const lineItems = lines.edges
 return (
  <>
   {modal && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
     <div
      ref={ref}
      className={cn('bg-bg-tertiary m-auto mx-8 p-8 pt-2 relative text-white rounded-lg', isMobile && 'mx-2 px-2')}>
      <div className='flex flex-col items-center'>
       {lineItems.length <= 0 || !id ? (
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
       <div onClick={() => router.push(pathname)}>
        <CartButton>Cancel</CartButton>
       </div>
       <a
        className={cn((lineItems.length <= 0 || !id) && 'opacity-30 pointer-events-none')}
        href={cartContents.checkoutUrl}>
        <CartButton variant='checkout'>Check Out</CartButton>
       </a>
      </div>
     </div>
    </dialog>
   )}
  </>
 )
}

export default Modal
