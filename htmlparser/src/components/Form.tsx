import type React from 'react'
import { useState } from 'react'
import htmltagIcon from '/htmltag.svg'
import downloadIcon from '/download.svg'

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
        <div>
            <form onSubmit={handleSubmit}>
                <div className='my-1'>
                    <label for='url' className='text-medium'>
                        URL
                    </label>
                    <input
                        type='url'
                        id='url'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className='rounded-lg border border-transparent px-2 py-1 mx-0.5 text-base font-medium text-slate-800 bg-slate-200 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                    />
                </div>
                <div className='flex justify-center'>
                    <div className='mr-4'>
                        <label htmlFor='id' className='text-medium mr-2'>
                            id
                        </label>
                        <input
                            type='checkbox'
                            name='attrs[]'
                            id='id'
                            value='id'
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                        />
                    </div>
                    <div>
                        <label htmlFor='class' className='text-medium mr-2'>
                            class
                        </label>
                        <input
                            type='checkbox'
                            name='attrs[]'
                            id='class'
                            value='class'
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-1 my-1 px-20'>
                    <button
                        type='submit'
                        className='flex items-center justify-center rounded-lg border border-transparent px-5 py-2.5 mx-1 text-base font-medium text-slate-100 bg-orange-600 hover:bg-orange-500 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                    >
                        <img src={htmltagIcon} className='w-7 pr-2' alt='parse HTML' />
                        解析
                    </button>
                    <button
                        type='submit'
                        className='flex items-center justify-center rounded-lg border border-transparent px-5 py-2.5 mx-1 text-base font-medium text-slate-100 bg-sky-600 hover:bg-sky-500 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                    >
                        <img src={downloadIcon} className='w-7 pr-2' alt='download json' />
                        解析結果DL（JSON）
                    </button>
                    <button
                        type='submit'
                        className='flex items-center justify-center rounded-lg border border-transparent px-5 py-2.5 mx-1 text-base font-medium text-slate-100 bg-emerald-600 hover:bg-emerald-500 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                    >
                        <img src={downloadIcon} className='w-7 pr-2' alt='download csv' />
                        解析結果DL（CSV）
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
