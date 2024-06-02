export type FormData = {
    url: string
    elements: string
    attrs: string[]
    api: string
}

export type DownloadData = {
    content: Blob
    fileName: string
}

export type AttributeValue = {
    [key: string]: string
}

export type ElementData = {
    [element: string]: AttributeValue[]
}

export interface ApiResponse {
    data: ElementData
}
