import React from 'react'
import FormFactorSelect from './ff-select'
import Logo from './logo'
import { useAtom } from 'jotai'
import { productAtom } from '../../state/atoms'

function Controls() {
 const [product, setProduct] = useAtom(productAtom)

 return (
  <div className='w-1/4 my-2 '>
   <Logo />
   <FormFactorSelect />
  </div>
 )
}

export default Controls
