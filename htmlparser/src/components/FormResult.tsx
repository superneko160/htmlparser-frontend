import { motion } from 'motion/react'
import type { IndexFormData } from './../types'
import { useDataFetch } from './../hooks/useDataFetch'
import Loading from './Loading'
import ResultTable from './ResultTable'

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
                    {formData.attrs.length === 0 ? '全属性' : formData.attrs.join(',')}
                </li>
            </ul>
            <div>
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <p className='text-red-500'>エラー: {error}</p>
                ) : data ? (
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.1,
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                    >
                        <ResultTable data={data} />
                    </motion.div>
                ) : (
                    <p>No Data</p>
                )}
            </div>
        </div>
    )
}

export default FormResult
