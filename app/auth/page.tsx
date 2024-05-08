'use client'
import { useLocalStorage } from 'usehooks-ts'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getToken } from '../lib/token'

function Auth() {
 const [codeVerifier, setCodeVerifier] = useLocalStorage('code_verifier', '')
 const searchParams = useSearchParams()
 const code = searchParams.get('code')

 console.log('code', code, 'verifier', codeVerifier)
 useEffect(() => {
  if (code && codeVerifier) {
   const sendRequest = async () => {
    const data = await fetch('/api/token', {
     method: 'POST',
     body: JSON.stringify({ code, codeVerifier }),
    })
    console.log('data', data)
    const json = await data.json()
    console.log('json', json)
   }
   sendRequest()
  }
 }, [code, codeVerifier])

 return <div>Auth</div>
}

export default Auth
