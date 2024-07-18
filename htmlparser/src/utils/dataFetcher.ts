import type { IndexFormData } from './../types'
import { getDownloadFileName, isDownloadFileUrl } from './downloadFile'

/**
 * WebAPIにPOST送信しデータを取得
 * @param {IndexFormData} formData
 * @return {Promise<Blob | any | null>}
 */
export async function fetchData(formData: IndexFormData): Promise<Blob | any | null> {
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
 * @return {Promise<Blob | any>}
 */
async function parseResponse(response: Response, apiUrl: string): Promise<Blob | any> {
    const fileName = getDownloadFileName(apiUrl)
    if (isDownloadFileUrl(apiUrl)) {
        const content = await response.blob()
        return { content, fileName }
    }
    return response.json()
}
