import type { SuccessApiResponse } from '../types'

type ResultTableProps = {
    data: SuccessApiResponse
}

function ResultTable({ data }: ResultTableProps) {
    return (
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
                                        <td className='p-3 text-left'>{value as string}</td>
                                    </tr>
                                )),
                            ),
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ResultTable
