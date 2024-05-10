import React from 'react'
import Controls from './controls'
import ImageBox from './imagebox'
import History from './history'

function FonzApp() {
 return (
  <div className='h-full'>
   <div className='w-full flex'>
    <Controls />
    <ImageBox />
   </div>
   <History />
  </div>
 )
}

export default FonzApp
