import React from 'react'

type LineItemProps = {
 lineItem: {
  node: {
   attributes: {
    key: string
    value: string
   }[]
   cost: {
    totalAmount: {
     amount: string
    }
   }
   merchandise: {
    product: {
     title: string
    }
    selectedOptions: {
     name: string
     value: string
    }[]
    title: string
   }
  }
 }
}

function LineItem({ lineItem }: LineItemProps) {
 const { merchandise, cost } = lineItem.node

 return (
  <div className='flex flex-col justify-between'>
   <p>{merchandise.product.title}</p>
   <p>{merchandise.title}</p>
   <p>{cost.totalAmount.amount}</p>
  </div>
 )
}

export default LineItem
