import type React from 'react'
import type { FormData } from './../types'

type FormResultProps = {
    formData: FormData
}

function FormResult({ formData }: FormResultProps) {
    return (
        <div>
            <p>Debug</p>
            <p>URL: {formData.url}</p>
            <p>Attrs: {formData.attrs.join(', ')}</p>
            <p>Elements: {formData.elements}</p>
        </div>
    )
}

export default FormResult
