import React from 'react'
import { useAtom } from 'jotai'
import { CustomScroll } from 'react-custom-scroll'
import { promptHistoryAtom } from '@/app/state/atoms'
import HistoryItem from './history-item'

function History() {
 const [promptHistory] = useAtom(promptHistoryAtom)
 return (
  <CustomScroll
   handleClass='handle'
   heightRelativeToParent='100%'>
   <div className='w-48 flex flex-col justify-start gap-2 pl-2 mr-6'>
    <span className='flex w-full justify-center pr-6'>History</span>
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
 )
}

export default History
