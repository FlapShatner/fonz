import React from 'react'
import { useAtom } from 'jotai'
import { sentVerificationAtom } from '../state/atoms'

function SentVerify() {
 const [sentVerification, setSentVerification] = useAtom(sentVerificationAtom)
 return (
  <div className='flex flex-col justify-center items-center w-[50vw] gap-4 p-8'>
   {sentVerification.sent && (
    <>
     <h2 className='text-xl min-w-full font-semibold'>This email address is already associated with an account</h2>
     <p>{sentVerification.message}</p>
    </>
   )}
  </div>
 )
}

export default SentVerify
