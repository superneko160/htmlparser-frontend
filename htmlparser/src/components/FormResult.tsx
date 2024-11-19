import { useState, useEffect } from 'react'
import type { IndexFormData, AttributeValue } from './../types'
import { useDataFetch } from './../hooks/useDataFetch'
import Loading from './Loading'

type FormResultProps = {
    formData: IndexFormData
}

function FormResult({ formData }: FormResultProps) {
    const { data, error, isLoading } = useDataFetch(formData)

    return (
        <div>
            <ul>
                <li>
                    <span className='font-semibold text-gray-900'>取得URL:</span> {formData.url}
                </li>
                <li>
                    <span className='font-semibold text-gray-900'>取得要素:</span>{' '}
                    {formData.elements}
                </li>
                <li>
                    <span className='font-semibold text-gray-900'>取得属性:</span>{' '}
                    {formData.attrs.length === 0 ? '全属性' : formData.attrs.join(', ')}
                </li>
            </ul>
            <div>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <p className='text-red-500'>エラー: {error}</p>
                ) : data ? (
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
                                        <th className='p-3'>要素</th>
                                        <th className='p-3'>属性</th>
                                        <th className='p-3 text-left'>値</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(data.data).map(([element, attributes]) =>
                                        attributes.map((attr: AttributeValue, index: number) =>
                                            Object.entries(attr).map(([key, value]) => (
                                                <tr
                                                    key={`${element}-${index}-${key}`}
                                                    className='border-b border-opacity-20 border-gray-400 bg-gray-50'
                                                >
                                                    <td className='p-3'>{element}</td>
                                                    <td className='p-3'>{key}</td>
                                                    <td className='p-3 text-left'>
                                                        {value as string}
                                                    </td>
                                                </tr>
                                            )),
                                        ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <p>No Data</p>
                )}
            </div>
        </div>
    )
}

export default FormResult
