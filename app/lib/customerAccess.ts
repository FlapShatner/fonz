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

export async function reqUrl() {
 const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
 const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI

 const nonce = await generateNonce(16)
 const state = await generateState()

 const authorizationRequestUrl = new URL(`https://shopify.com/58080919635/auth/oauth/authorize`)

 authorizationRequestUrl.searchParams.append('scope', 'openid email https://api.customers.com/auth/customer.graphql')
 authorizationRequestUrl.searchParams.append('client_id', clientId as string)
 authorizationRequestUrl.searchParams.append('response_type', 'code')
 authorizationRequestUrl.searchParams.append('redirect_uri', redirectUri as string)
 authorizationRequestUrl.searchParams.append('state', state)
 authorizationRequestUrl.searchParams.append('nonce', nonce)

 return { reqUrl: authorizationRequestUrl.toString() }
}
