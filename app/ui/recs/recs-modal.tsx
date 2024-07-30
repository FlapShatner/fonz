'use client'
import { useRef, useEffect, Suspense } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useAtom, useAtomValue } from 'jotai'
import { useOnClickOutside } from 'usehooks-ts'
import RecsClose from './recs-close'
import RecsItem from './recs-item'
import { promptAtom, selectedFFAtom, recsAtom } from '@/app/state/atoms'
import { cn, getRecs } from '@/app/utils'
import Spinner from '../spinner/spinner'
import RecsCarousel from './recs-carousel'

function RecsModal() {
 const router = useRouter()
 const pathname = usePathname()
 const [prompt, setPrompt] = useAtom(promptAtom)
 const selectedFF = useAtomValue(selectedFFAtom)
 const [recs, setRecs] = useAtom(recsAtom)
 const searchParams = useSearchParams()
 const modal = searchParams.get('modal') === 'recs'
 const ref = useRef(null)
 useOnClickOutside(ref, () => {
  router.push('/fonz')
 })
 useEffect(() => {
  const fetchRecs = async () => {
   const recs = await getRecs({ userQuery: prompt, productType: selectedFF.id === 'wi' ? 'Truck Back Window Graphics' : 'Vinyl Decal' })
   console.log('recs', recs)
   //  console.log('prompt:', prompt)
   setRecs(recs)
   if (recs.length === 0) {
    router.push('/fonz')
   }
  }
  fetchRecs()
 }, [])
 const heading = 'While you wait, here are some other designs you might like!'
 const note = 'Products will open in a new tab'
 if (!prompt) return null
 return (
  <>
   {modal && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
     <div
      ref={ref}
      className={cn('bg-bg-tertiary m-auto p-8 pt-4 relative text-white rounded-lg max-w-[90vw]')}>
      <div className='text-xl font-semibold'>{heading}</div>
      <div className='text-sm text-txt-secondary'>{note}</div>
      <RecsCarousel />
      <div
       className='cursor-pointer w-max ml-auto'
       onClick={() => router.push('/fonz')}>
       <RecsClose>Close</RecsClose>
      </div>
     </div>
    </dialog>
   )}
  </>
 )
}

export default RecsModal
