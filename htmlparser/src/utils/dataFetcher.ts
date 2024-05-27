import type { FormData } from './../types'

export async function fetchData(formData: FormData) {
    try {
        const postData = new FormData()
        postData.append('url', formData.url)
        postData.append('elements', formData.elements)
        postData.append('attrs[]', formData.attrs)
        const response = await fetch('https://htmlparser.supernekocat31.workers.dev/parse', {
            method: 'POST',
            body: postData,
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}
