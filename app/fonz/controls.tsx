import React from 'react'
import { useAtom } from 'jotai'
import { productAtom } from '../state/product-atoms'

function Controls() {
 const [product, setProduct] = useAtom(productAtom)

 return (
  <div className='w-1/4 border  border-border '>
   <div></div>
  </div>
 )
}

export default Controls
