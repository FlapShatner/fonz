export type ShapeType = {
 id: string
 label: string
}

export type PromptType = {
 event: string
 prompt: string
 caption: string
 wsId: string
 shape: ShapeType
}

export type StyleOptionType = {
 id: string
 label: string
 prompt: string
 img: string
}
