import nlp from 'compromise'

export const getNouns = async ({ userQuery }: { userQuery: string }) => {
 let query = nlp(userQuery)
 const result = await query.match('#Noun').out('array')
 console.log(result)
 return result
}
