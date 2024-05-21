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
        <div className='mb-2'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className='rounded-lg border border-transparent px-5 py-2.5 mx-1 text-base font-medium text-slate-200 bg-gray-900 cursor-pointer transition-colors hover:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300'
                />
                <button
                    type='submit'
                    className='rounded-lg border border-transparent px-5 py-2.5 mx-1 text-base font-medium text-slate-200 bg-gray-900 cursor-pointer transition-colors hover:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300'
                >
                    HTML解析
                </button>
            </form>
        </div>
    )
}

export default Form
