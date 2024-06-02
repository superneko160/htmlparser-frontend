import type { FormData } from './../types'
import { getDownloadFileName, isDownloadFileUrl } from './downloadFile'

/**
 * WeabAPIにPOST送信しデータを取得
 * @param {FormData} formData
 */
export async function fetchData(formData: FormData) {
    try {
        const postData = new FormData()
        postData.append('url', formData.url)
        postData.append('elements', formData.elements)
        for (const attr of formData.attrs) {
            postData.append('attrs[]', attr)
        }

        const response = await fetch(formData.api, {
            method: 'POST',
            body: postData,
        })

        const fileName = getDownloadFileName(formData.api)

        // レスポンスをBlobオブジェクトに変換して返却
        if (isDownloadFileUrl(formData.api)) return { content: await response.blob(), fileName }
        // JSONで返却
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}
