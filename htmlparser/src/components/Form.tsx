import type React from 'react'
import { useState } from 'react'
import type { FormData } from './../types'
import htmltagIcon from '/htmltag.svg'
import downloadIcon from '/download.svg'

type FormProps = {
    onSubmit: (formData: FormData) => void
}

function Form({ onSubmit }: FormProps) {
    const [formData, setFormData] = useState<FormData>({
        url: '',
        elements: '',
        attrs: [],
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(formData)
        setFormData({ url: '', elements: '', attrs: [] })
    }

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, url: e.target.value })
    }

    const handleElementsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, elements: e.target.value })
    }

    const handleAttrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target
        setFormData({
            ...formData,
            attrs: checked
                ? [...formData.attrs, value]
                : formData.attrs.filter(attr => attr !== value),
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='my-1'>
                    <div className='m-1'>
                        <label htmlFor='url' className='block text-sm'>
                            URL
                        </label>
                        <input
                            type='url'
                            id='url'
                            value={formData.url}
                            onChange={handleUrlChange}
                            placeholder='https://example.com'
                            className='rounded-lg border border-transparent px-2 py-1 mx-0.5 text-base font-medium text-slate-800 bg-slate-200 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                        />
                    </div>
                    <div className='m-1'>
                        <label htmlFor='elements' className='block text-sm'>
                            Elements
                        </label>
                        <input
                            type='text'
                            id='elements'
                            value={formData.elements}
                            onChange={handleElementsChange}
                            placeholder='div'
                            className='rounded-lg border border-transparent px-2 py-1 mx-0.5 text-base font-medium text-slate-800 bg-slate-200 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                        />
                    </div>
                </div>
                <div className='flex justify-center my-3'>
                    <div className='mr-4'>
                        <label htmlFor='id' className='text-medium mr-2'>
                            id
                        </label>
                        <input
                            type='checkbox'
                            name='attrs[]'
                            id='id'
                            value='id'
                            onChange={handleAttrChange}
                            checked={formData.attrs.includes('id')}
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
                            onChange={handleAttrChange}
                            checked={formData.attrs.includes('class')}
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
