async function generateNonce(length: number) {
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
 let nonce = ''

 for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length)
  nonce += characters.charAt(randomIndex)
 }

 return nonce
}
export async function generateState(): Promise<string> {
 const timestamp = Date.now().toString()
 const randomString = Math.random().toString(36).substring(2)
 return timestamp + randomString
}

export async function generateCodeVerifier() {
 const rando = generateRandomCode()
 return base64UrlEncode(rando)
}

export async function generateCodeChallenge(codeVerifier: string) {
 const digestOp = await crypto.subtle.digest({ name: 'SHA-256' }, new TextEncoder().encode(codeVerifier))
 const hash = convertBufferToString(digestOp)
 return base64UrlEncode(hash)
}

function generateRandomCode() {
 const array = new Uint8Array(32)
 crypto.getRandomValues(array)
 return String.fromCharCode.apply(null, Array.from(array))
}

function base64UrlEncode(str: string) {
 const base64 = btoa(str)
 // This is to ensure that the encoding does not have +, /, or = characters in it.
 return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function convertBufferToString(hash: ArrayBuffer) {
 const uintArray = new Uint8Array(hash)
 const numberArray = Array.from(uintArray)
 return String.fromCharCode(...numberArray)
}

export async function reqUrl() {
 const clientId = 'shp_59978d77-79bb-4247-914a-fb5b7624e008'
 const redirectUri = 'https://fonz.ink-dev.com/auth'

 const nonce = await generateNonce(16)
 const state = await generateState()

 const authorizationRequestUrl = new URL(`https://shopify.com/58080919635/auth/oauth/authorize`)

 authorizationRequestUrl.searchParams.append('scope', 'openid email https://api.customers.com/auth/customer.graphql')
 authorizationRequestUrl.searchParams.append('client_id', clientId as string)
 authorizationRequestUrl.searchParams.append('response_type', 'code')
 authorizationRequestUrl.searchParams.append('redirect_uri', redirectUri as string)
 authorizationRequestUrl.searchParams.append('state', state)
 authorizationRequestUrl.searchParams.append('nonce', nonce)

 const verifier = await generateCodeVerifier()
 const challenge = await generateCodeChallenge(verifier)
 //  localStorage.setItem('code-verifier', verifier)
 authorizationRequestUrl.searchParams.append('code_challenge', challenge)
 authorizationRequestUrl.searchParams.append('code_challenge_method', 'S256')

 return { reqUrl: authorizationRequestUrl.toString(), verifier: verifier }
}
