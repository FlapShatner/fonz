import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { CustomScroll } from 'react-custom-scroll'
import HistoryIcon from '@/app/icons/history'
import HistoryItem from './history-item'
import { useAtom } from 'jotai'
import { historyIsOpenAtom, promptHistoryAtom } from '@/app/state/atoms'

function MobileHistory() {
 const [historyIsOpen, setHistoryOpen] = useAtom(historyIsOpenAtom)
 const [promptHistory] = useAtom(promptHistoryAtom)
 const ref = useRef(null)

 useOnClickOutside(ref, () => {
  setHistoryOpen(false)
 })

 return (
  <div>
   <div
    onClick={() => setHistoryOpen(!historyIsOpen)}
    className='flex justify-center gap-2 rounded-md bg-txt-secondary text-bg-primary font-semibold px-4 py-3 my-6 mx-4'>
    <HistoryIcon className='w-5 text-bg-primary' />
    History
   </div>
   {historyIsOpen && (
    <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
     <CustomScroll
      handleClass='handle'
      heightRelativeToParent='80%'>
      <div
       ref={ref}
       className='grid grid-cols-3 gap-2 bg-bg-primary text-white p-4 rounded-md'>
       {promptHistory.map(
        (item, i) =>
         item.productId !== '' && (
          <HistoryItem
           key={i}
           item={item}
          />
         )
       )}
      </div>
     </CustomScroll>
    </dialog>
   )}
  </div>
 )
}

export default MobileHistory
