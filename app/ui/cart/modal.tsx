'use client'
import { useRef } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import CloseButton from './close-button'
import { useOnClickOutside } from 'usehooks-ts'
import { useAtom } from 'jotai'
import { cartDataAtom } from '@/app/state/atoms'

function Modal() {
 const [cartData, setCartData] = useAtom(cartDataAtom)
 const ref = useRef(null)
 const router = useRouter()
 const searchParams = useSearchParams()
 const modal = searchParams.get('modal')
 const pathname = usePathname()
 useOnClickOutside(ref, () => {
  router.push(pathname)
 })

 const cartEmpty = !cartData.hasCart

 return (
  <>
   {modal && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
     <div
      ref={ref}
      className='bg-white m-auto p-8 relative'>
      <div className='flex flex-col items-center'>
       <p>Modal content</p>
      </div>
     </div>
    </dialog>
   )}
  </>
 )
}

export default Modal
