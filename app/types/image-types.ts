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

export type MetaType = {
 id: string
 flags: number
 content: string
 hash: string
 progress: string
 uri: string
 proxy_url: string
 options: MetaOptionType[]
 width: number
 height: number
}

export type MetaOptionType = {
 type: number
 style: number
 label: string
 custom: string
}

export type Generated = {
 imgData: ImgData
 productId: string
 isGrid: boolean
 ff: string
 size: string
 secVar: SecVar
 style: string
 meta?: MetaType
 caption: string
 secVarLabel: string
 prompt: string
}

export type CldImageType = {
 publicID: string
 gravity: string
 productId: string
}
