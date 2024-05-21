import type React from 'react'
import { useState } from 'react'

type FormProps = {
    onSubmit: (value: string) => void
}

function Form({ onSubmit }: FormProps) {
    const [value, setValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={e => setValue(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
