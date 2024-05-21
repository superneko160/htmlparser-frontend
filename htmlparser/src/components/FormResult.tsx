import type React from 'react'

type FormResultProps = {
    value: string
}

function FormResult({ value }: FormResultProps) {
    return <div>{value}</div>
}

export default FormResult
