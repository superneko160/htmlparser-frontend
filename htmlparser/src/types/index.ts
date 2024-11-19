export type IndexFormData = {
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

export type UseDataFetchResult = {
    data: SuccessApiResponse | null
    error: string | null
    isLoading: boolean
}

export interface SuccessApiResponse {
    data: ElementData
}

export interface ErrorApiResponse {
    status: number
    error: string
}

export type ApiResponse = SuccessApiResponse | ErrorApiResponse
