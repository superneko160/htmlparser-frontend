import type React from 'react'
import { useState, useEffect } from 'react'
import type { FormData } from './../types'
import { fetchData } from './../utils/dataFetcher'

type FormResultProps = {
    formData: FormData
}

function FormResult({ formData }: FormResultProps) {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (formData.url !== '') fetchData(formData).then(setData)
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
