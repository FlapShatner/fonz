// // import { client } from '../../lib/storefront-api-client'

// const GRAPHQL_QUERY = `
//   query {
//     shop {
//       name
//     }
//   }
// `

// export async function GET() {
//  const response = await fetch(client.getApiUrl(), {
//   body: JSON.stringify({
//    query: GRAPHQL_QUERY,
//   }),
//   // Generate the headers using the private token.
//   headers: client,
//   method: 'POST',
//  })
//  if (!response.ok) {
//   throw new Error(response.statusText)
//  }

//  const { data } = await response.json()

//  return Response.json({ data })
// }
