import React from 'react'
import { useAtom } from 'jotai'
import { statusAtom } from '@/app/state/atoms'

function Progress() {
 const [status] = useAtom(statusAtom)
 //  const status = '50%'
 return (
  <div className='relative w-full h-16 bg-slate-tr mt-auto mb-12'>
   <p className='w-full absolute text-center -top-8 text-white'>Progress: {status}</p>
   <div
    style={{ width: status }}
    className='h-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 '
   />
  </div>
 )
}

export default Progress
