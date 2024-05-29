import InfoDrawer from './info-drawer'
import BackBtn from './back-btn'
import { CldImage } from 'next-cloudinary'
import { useAtom } from 'jotai'
import { generatedAtom, selectedImageAtom } from '@/app/state/atoms'

function Upscaled() {
 const [generated] = useAtom(generatedAtom)
 if (!generated) return null
 return (
  <div className='flex flex-col h-full w-full'>
   <div className='flex justify-between'>
    <BackBtn />
    <a
     className='bg-backdrop py-1 px-2 m-1 rounded-md flex items-center mr-2 cursor-pointer h-max z-20'
     href={generated.imgData.url}
     target='_blank'
     rel='noopener noreferrer'>
     Click image to zoom
    </a>
   </div>

   <a
    className='cursor-zoom-in'
    target='_blank'
    rel='noopener noreferrer'
    href={generated.imgData.url}>
    <CldImage
     src={generated.imgData.publicId}
     className='object-contain'
     fill
     alt={generated.caption}
    />
   </a>
  </div>
 )
}

export default Upscaled
