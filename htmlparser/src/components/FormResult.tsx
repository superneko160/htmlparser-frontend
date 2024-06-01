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
            <ul>
                <li>
                    <span class='font-semibold text-gray-900'>URL:</span> {formData.url}
                </li>
                <li>
                    <span class='font-semibold text-gray-900'>要素:</span> {formData.elements}
                </li>
                <li>
                    <span class='font-semibold text-gray-900'>属性:</span>{' '}
                    {formData.attrs.length === 0 ? 'ALL' : formData.attrs.join(', ')}
                </li>
            </ul>
            <div>
                {data ? (
                    <div className='container p-2 mx-auto sm:p-4'>
                        <div className='overflow-x-auto'>
                            <table className='min-w-full text-xs'>
                                <colgroup>
                                    <col className='w-1/5' />
                                    <col className='w-1/5' />
                                    <col className='w-3/5' />
                                </colgroup>
                                <thead className='bg-gray-300'>
                                    <tr className='text-center'>
                                        <th className='p-3'>要素名</th>
                                        <th className='p-3'>属性</th>
                                        <th className='p-3 text-left'>値</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(data.data).map(([element, attributes]) =>
                                        attributes.map((attr, index) =>
                                            Object.entries(attr).map(([key, value]) => (
                                                <tr
                                                    key={`${element}-${index}-${key}`}
                                                    className='border-b border-opacity-20 border-gray-400 bg-gray-50'
                                                >
                                                    <td className='p-3'>{element}</td>
                                                    <td className='p-3'>{key}</td>
                                                    <td className='p-3 text-left'>{value}</td>
                                                </tr>
                                            )),
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <p>データがありません</p>
                )}
            </div>
        </div>
    )
}

export default FormResult
