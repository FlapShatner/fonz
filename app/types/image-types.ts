export type ImgData = {
 publicId: string
 url: string
}

export type Generated = {
 imgData: ImgData
 productId: string
 isGrid: boolean
 meta: string
 caption: string
 prompt: string
}

export type CldImage = {
 publicID: string
 gravity: string
}
