import { useState } from 'react'
import type { IndexFormData } from './../types'
import { HTMLPARSER_URLS } from './../codeinfo/urls'
import CheckboxItem from './CheckboxItem'
import htmltagIcon from '/htmltag.svg'
import downloadIcon from '/download.svg'

type FormProps = {
    onSubmit: (formData: IndexFormData) => void
}

function Form({ onSubmit }: FormProps) {
    const [formData, setFormData] = useState<IndexFormData>({
        url: '',
        elements: '',
        attrs: [],
        api: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(formData)
    }

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevFormData => ({ ...prevFormData, url: e.target.value }))
    }

    const handleElementsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevFormData => ({ ...prevFormData, elements: e.target.value }))
    }

    const handleAttrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            attrs: checked
                ? [...prevFormData.attrs, value]
                : prevFormData.attrs.filter(attr => attr !== value),
        }))
    }

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currentApi = e.currentTarget.value
        setFormData(prevFormData => ({ ...prevFormData, api: currentApi }))
    }

    const resetForm = () => {
        setFormData({
            url: '',
            elements: '',
            attrs: [],
            api: '',
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
                            required
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
                            placeholder='img,div'
                            required
                            className='rounded-lg border border-transparent px-2 py-1 mx-0.5 text-base font-medium text-slate-800 bg-slate-200 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                        />
                    </div>
                </div>
                
                <div className='my-3 border border-slate-400 rounded-sm pl-2 py-3 md:mx-20'>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1'>
                        <CheckboxItem 
                            id='id' 
                            label='id' 
                            checked={formData.attrs.includes('id')}
                            onChange={handleAttrChange}
                        />
                        <CheckboxItem 
                            id='class' 
                            label='class' 
                            checked={formData.attrs.includes('class')}
                            onChange={handleAttrChange}
                        />
                        <CheckboxItem 
                            id='href' 
                            label='href' 
                            checked={formData.attrs.includes('href')}
                            onChange={handleAttrChange}
                        />
                        <CheckboxItem 
                            id='src' 
                            label='src' 
                            checked={formData.attrs.includes('src')}
                            onChange={handleAttrChange}
                        />
                        <CheckboxItem 
                            id='alt' 
                            label='alt' 
                            checked={formData.attrs.includes('alt')}
                            onChange={handleAttrChange}
                        />
                        <CheckboxItem 
                            id='action' 
                            label='action' 
                            checked={formData.attrs.includes('action')}
                            onChange={handleAttrChange}
                        />
                        <CheckboxItem 
                            id='method' 
                            label='method' 
                            checked={formData.attrs.includes('method')}
                            onChange={handleAttrChange}
                        />
                        <CheckboxItem 
                            id='name' 
                            label='name' 
                            checked={formData.attrs.includes('name')}
                            onChange={handleAttrChange}
                        />
                        <CheckboxItem 
                            id='value' 
                            label='value' 
                            checked={formData.attrs.includes('value')}
                            onChange={handleAttrChange}
                        />
                    </div>
                </div>
                
                <div className='flex justify-center my-3'>
                    <button
                        type='button'
                        onClick={resetForm}
                        className='rounded-lg border border-transparent px-4 py-2 text-base text-slate-100 bg-slate-500 cursor-pointer transition-colors hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-opacity-75'
                    >
                        リセット
                    </button>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-1 my-2 px-4 md:px-20'>
                    <button
                        type='submit'
                        onClick={handleButtonClick}
                        value={HTMLPARSER_URLS.RETURN_JSON}
                        className='flex items-center justify-center rounded-lg border border-transparent px-5 py-2.5 mx-1 text-base font-medium text-slate-100 bg-orange-600 hover:bg-orange-500 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                    >
                        <img src={htmltagIcon} className='w-7 pr-2' alt='parse HTML' />
                        解析
                    </button>
                    <button
                        type='submit'
                        onClick={handleButtonClick}
                        value={HTMLPARSER_URLS.DOWNLOAD_JSON}
                        className='flex items-center justify-center rounded-lg border border-transparent px-5 py-2.5 mx-1 text-base font-medium text-slate-100 bg-sky-600 hover:bg-sky-500 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-75'
                    >
                        <img src={downloadIcon} className='w-7 pr-2' alt='download json' />
                        解析結果DL（JSON）
                    </button>
                    <button
                        type='submit'
                        onClick={handleButtonClick}
                        value={HTMLPARSER_URLS.DOWNLOAD_CSV}
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
