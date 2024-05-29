import type React from 'react'
import { useState, useEffect } from 'react'
import type { FormData } from './../types'
import { HTMLPARSER_URLS } from './../codeinfo/urls'
import { fetchData } from './../utils/dataFetcher'
import { isDownloadFileUrl, downloadFile } from './../utils/downloadFile'

type FormResultProps = {
    formData: FormData
}

function FormResult({ formData }: FormResultProps) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchAndSetData = async () => {
            const result = await fetchData(formData)
            if (formData.api === HTMLPARSER_URLS.RETURN_JSON) setData(result)
            if (isDownloadFileUrl(formData.api)) downloadFile(result)
        }
        fetchAndSetData()
    }, [formData])

    return (
        <div>
            <p>Debug</p>
            <p>URL: {formData.url}</p>
            <p>Attrs: {formData.attrs.join(', ')}</p>
            <p>Elements: {formData.elements}</p>
            <div>
                {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>データがありません</p>}
            </div>
        </div>
    )
}

export default FormResult
