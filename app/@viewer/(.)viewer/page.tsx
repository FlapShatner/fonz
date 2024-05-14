'use client'
import React from 'react'
import Viewer from '@/app/viewer/viewer'
import { cn } from '@/app/utils'
import { useAtom } from 'jotai'
import { viewOpenAtom } from '@/app/state/product-atoms'

function Page() {
 const [viewOpen, setViewOpen] = useAtom(viewOpenAtom)
 return (
  <div className={cn('cursor-pointer bg-zinc-900 absolute top-12 -right-0 max-h-[400px] overflow-y-scroll', !viewOpen && 'hidden')}>
   <div
    onClick={() => setViewOpen(!viewOpen)}
    className='p-2 border border-border'>
    Close
   </div>
   <Viewer />
  </div>
 )
}

export default Page
