import React from 'react'
import Grid from './grid'
import { useAtom } from 'jotai'
import { generatedAtom } from '@/app/state/atoms'

function ImageBox() {
 const [generated] = useAtom(generatedAtom)
 return (
  <div className='w-3/4 bg-announce rounded-md my-2'>
   <Grid />
  </div>
 )
}

export default ImageBox
