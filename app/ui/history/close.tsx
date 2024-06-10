import React from 'react'
import CloseX from '@/app/icons/close-x'
import { useAtom } from 'jotai'
import { historyIsOpenAtom } from '@/app/state/atoms'

function Close() {
 const [historyIsOpen, setHistoryIsOpen] = useAtom(historyIsOpenAtom)
 const handleClick = () => {
  setHistoryIsOpen(false)
 }

 return (
  <div
   className='flex justify-end'
   onClick={handleClick}>
   <CloseX className='cursor-pointer w-6 h-6 text-red-600' />
  </div>
 )
}

export default Close
