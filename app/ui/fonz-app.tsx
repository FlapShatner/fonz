import React from 'react'
import Controls from './controls/product/controls'
import ImageBox from './imagebox'
import History from './history'

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
