'use client'
import React from 'react'
import { useAtom } from 'jotai'
import { productAtom, selectedFFAtom } from '../state/product-atoms'
import { customerAtom } from '../state/customer-atoms'

function Viewer() {
 const [product, setProduct] = useAtom(productAtom)
 const [selectedFF, setSelectedFF] = useAtom(selectedFFAtom)
 const [customer, setCustomer] = useAtom(customerAtom)
 return (
  <div>
   <div>
    <h2>Product</h2>
    <pre>{JSON.stringify(product, null, 2)}</pre>
    <h2>Selected Form Factor</h2>
    <pre>{JSON.stringify(selectedFF, null, 2)}</pre>
   </div>
   <div>
    <h2>Customer</h2>
    <pre>{JSON.stringify(customer, null, 2)}</pre>
   </div>
  </div>
 )
}

export default Viewer
