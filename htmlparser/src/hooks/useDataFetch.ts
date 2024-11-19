import { useState, useEffect } from 'react'
import type {
    IndexFormData,
    UseDataFetchResult,
    ApiResponse,
    SuccessApiResponse,
    DownloadData,
} from '../types'
import { HTMLPARSER_URLS } from '../codeinfo/urls'
import { fetchData } from '../utils/dataFetcher'
import { isDownloadFileUrl, downloadFile } from '../utils/downloadFile'

export const useDataFetch = (formData: IndexFormData): UseDataFetchResult => {
    const [data, setData] = useState<SuccessApiResponse | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchAndSetData = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const result = await fetchData(formData)
                handleFetchResult(result)
            } catch (error) {
                console.error('データの取得中にエラーが発生しました:', error)
                setError('データの取得中にエラーが発生しました')
            } finally {
                setIsLoading(false)
            }
        }

        const handleFetchResult = (result: ApiResponse | DownloadData | null) => {
            if (result === null) {
                setError('データの取得中にエラーが発生しました')
                return
            }

            if (formData.api === HTMLPARSER_URLS.RETURN_JSON) {
                handleJsonApiResult(result)
                return
            }

            if (isDownloadFileUrl(formData.api)) {
                handleDownloadResult(result)
                return
            }

            setError('Unexpected API type')
        }

        const handleJsonApiResult = (result: ApiResponse | DownloadData) => {
            if ('data' in result || 'error' in result) {
                handleJsonResult(result)
                return
            }

            setError('Unexpected result type for JSON API')
        }

        const handleDownloadResult = (result: ApiResponse | DownloadData) => {
            if ('content' in result && 'fileName' in result) {
                downloadFile(result)
                return
            }

            setError('Unexpected result type for download URL')
        }

        const handleJsonResult = (result: ApiResponse) => {
            if ('data' in result) {
                setData(result)
                return
            }

            if ('error' in result) {
                setError(result.error)
                return
            }

            setError('Unexpected result type')
        }

        fetchAndSetData()
    }, [formData])

    return { data, error, isLoading }
}
