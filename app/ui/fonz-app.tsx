import React from 'react'
import Controls from './controls/controls'
import ImageBox from './image/imagebox'
import History from './history/history'

function FonzApp() {
 return (
  <div className='h-app w-full flex'>
   <Controls />
   <ImageBox />
   <History />
  </div>
 )
}

export default FonzApp
