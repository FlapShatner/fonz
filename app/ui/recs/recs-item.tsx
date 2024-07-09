import { Product } from '@/app/storefront-api/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useAtomValue } from 'jotai'
import { shopAtom } from '@/app/state/atoms'

function RecsItem(product: Product) {
 const shop = useAtomValue(shopAtom)
 const prod = product.node
 const url = `${shop.primaryDomain.url}/products/${prod.handle}`
 return (
  <div className='w-[200px]  h-full flex flex-col relative'>
   <a
    className='w-[200px]'
    key={prod.id}
    rel='noopener noreferrer'
    target='_blank'
    href={url}>
    <Image
     className='object-cover'
     style={{
      display: 'auto',
      minWidth: '200px',
      height: '200px',
      inset: '0',
      transition: 'opacity 0.3s',
     }}
     src={prod.featuredImage.url}
     alt='temp image'
     width={200}
     height={200}
    />
    <div className='px-1 py-2'>
     <p className='text-xs font-light'>{prod.title}</p>
     <div className='text-green-600 text-xs flex items-center gap-2'>
      <div className='w-[6px] h-[6px] rounded-full  bg-green-600' />
      In stock
     </div>
    </div>
   </a>
  </div>
 )
}

export default RecsItem
