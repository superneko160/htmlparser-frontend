import type { IndexFormData, DownloadData, ApiResponse } from './../types'
import { getDownloadFileName, isDownloadFileUrl } from './downloadFile'

/**
 * WebAPIにPOST送信しデータを取得
 * @param {IndexFormData} formData
 * @return {Promise<ApiResponse | DownloadData | null>}
 */
export async function fetchData(
    formData: IndexFormData,
): Promise<ApiResponse | DownloadData | null> {
    try {
        const postData = createPostData(formData)
        const response = await fetch(formData.api, {
            method: 'POST',
            body: postData,
        })
        return parseResponse(response, formData.api)
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}

/**
 * フォームデータからPOSTデータを作成
 * @param {IndexFormData} formData
 * @return {FormData}
 */
function createPostData(formData: IndexFormData): FormData {
    const postData = new FormData()
    postData.append('url', formData.url)
    postData.append('elements', formData.elements)
    formData.attrs.forEach(attr => postData.append('attrs[]', attr))
    return postData
}

/**
 * レスポンスを適切な形式に変換
 * @param {Response} response
 * @param {string} apiUrl
 * @return {Promise<ApiResponse | DownloadData>}
 */
async function parseResponse(
    response: Response,
    apiUrl: string,
): Promise<ApiResponse | DownloadData> {
    const fileName = getDownloadFileName(apiUrl)
    if (isDownloadFileUrl(apiUrl)) {
        const content = await response.blob()
        return { content, fileName }
    }
    return response.json()
}
