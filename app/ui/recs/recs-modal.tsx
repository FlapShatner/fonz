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

const Loader = () => {
 return (
  <div className='w-[200px] h-[200px] flex justify-center items-center border-2 rounded-md border-accent-tr'>
   <Spinner />
  </div>
 )
}

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
  router.push(pathname)
 })
 useEffect(() => {
  const fetchRecs = async () => {
   const recs = await getRecs({ userQuery: prompt, productType: selectedFF.id === 'wi' ? 'Truck Back Window Graphics' : 'Vinyl Decal' })
   console.log('recs', recs)
   //  console.log('prompt:', prompt)
   setRecs(recs)
  }
  fetchRecs()
 }, [])
 const heading = 'While you wait, here are some other designs you might like!'
 const note = 'Products will open in a new tab'
 return (
  <>
   {modal && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
     <div
      ref={ref}
      className={cn('bg-bg-tertiary m-auto p-8 pt-2 relative text-white rounded-lg max-w-[900px]')}>
      <div className='text-xl font-semibold'>{heading}</div>
      <div className='text-sm text-txt-secondary'>{note}</div>
      <div className='flex gap-8 justify-start pt-8 m-auto max-w-[880px] overflow-x-scroll'>
       {recs.map((rec) => (
        <Suspense
         fallback={<Loader />}
         key={rec.node.id}>
         <RecsItem {...rec} />
        </Suspense>
       ))}
      </div>
      <div
       className='cursor-pointer'
       onClick={() => router.push(pathname)}>
       <RecsClose>Close</RecsClose>
      </div>
     </div>
    </dialog>
   )}
  </>
 )
}

export default RecsModal
