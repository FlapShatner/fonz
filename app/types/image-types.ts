export type ImgData = {
 publicId: string
 url: string
}

export type SecVar = {
 ar: string
 grid: boolean
 id: string
 label: string
}
export type Generated = {
 imgData: ImgData
 productId: string
 isGrid: boolean
 ff: string
 size: string
 secVar: SecVar
 style: string
 meta: string
 caption: string
 secVarLabel: string
 prompt: string
}

export type CldImageType = {
 publicID: string
 gravity: string
 productId: string
}
