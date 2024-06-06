import React from 'react'
import { CldImage } from 'next-cloudinary'
import type { Generated } from '@/app/types/image-types'

import { getProductVariant } from '@/app/storefront-api/products'
import { useAtom } from 'jotai'
import {
 generatedAtom,
 isGridAtom,
 selectedFFAtom,
 selectedSizeAtom,
 selectedSecVarAtom,
 promptHistoryAtom,
 selectedImageAtom,
 selectedImageDefault,
 historyIsOpenAtom,
} from '@/app/state/atoms'
import type { ProductVariant } from '@/app/types/product-types'

type ImgData = {
 publicId: string
 url: string
}

type SecVar = {
 ar: string
 grid: boolean
 id: string
 label: string
}

type HistoryItemProps = {
 item: Generated
}

function HistoryItem({ item }: HistoryItemProps) {
 const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)
 const [generated, setGenerated] = useAtom(generatedAtom)
 const [isGrid, setIsGrid] = useAtom(isGridAtom)
 const [selectedSecVar, setSelectedSecVar] = useAtom(selectedSecVarAtom)
 const [historyIsOpen, setHistoryIsOpen] = useAtom(historyIsOpenAtom)
 const isUpscaled = item.isUpscaled

 const handleClick = async () => {
  setGenerated(item)
  setSelectedSecVar(item.secVar)
  setIsGrid(item.isGrid)
  setSelectedImage(selectedImageDefault)
  setHistoryIsOpen(false)
 }

 return (
  <div className='max-w-40 relative border border-bg-tertiary p-1 rounded-md hover:bg-accent-tr cursor-pointer'>
   <CldImage
    onClick={handleClick}
    src={item.imgData.publicId}
    className='object-contain'
    width={160}
    height={160}
    alt={item.caption}
   />
   <p className='text-ellipsis overflow-hidden whitespace-nowrap text-sm font-light max-w-40'>{item.caption}</p>
  </div>
 )
}

export default HistoryItem
