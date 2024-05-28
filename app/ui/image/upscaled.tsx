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
    <InfoDrawer />
    <BackBtn />
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
