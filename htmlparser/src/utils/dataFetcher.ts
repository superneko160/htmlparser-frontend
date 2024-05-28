import type { FormData } from './../types'

/**
 * WeabAPIにPOST送信しデータを取得
 * @param {FormData} formData
 */
export async function fetchData(formData: FormData) {
    try {
        const postData = new FormData()
        postData.append('url', formData.url)
        postData.append('elements', formData.elements)
        postData.append('attrs[]', formData.attrs)
        const response = await fetch(formData.api, {
            method: 'POST',
            body: postData,
        })
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}
