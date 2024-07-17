import { describe, it, expect } from 'vitest'
import { getDownloadFileName, isDownloadFileUrl } from './../../src/utils/downloadFile'
import { HTMLPARSER_URLS } from './../../src/codeinfo/urls'

describe('getDownloadFileName', () => {
    it('JSONダウンロードURLの場合、文字列"result.json"を返す', () => {
        expect(getDownloadFileName(HTMLPARSER_URLS.DOWNLOAD_JSON)).toBe('result.json')
    })

    it('CSVダウンロードURLの場合、文字列"result.csv"を返す', () => {
        expect(getDownloadFileName(HTMLPARSER_URLS.DOWNLOAD_CSV)).toBe('result.csv')
    })

    it('その他のURLの場合、文字列"result"を返す', () => {
        expect(getDownloadFileName(HTMLPARSER_URLS.RETURN_JSON)).toBe('result')
    })
})

describe('isDownloadFileUrl', () => {
    it('JSONダウンロードURLの場合、trueを返す', () => {
        expect(isDownloadFileUrl(HTMLPARSER_URLS.DOWNLOAD_JSON)).toBe(true)
    })

    it('CSVダウンロードURLの場合、trueを返す', () => {
        expect(isDownloadFileUrl(HTMLPARSER_URLS.DOWNLOAD_CSV)).toBe(true)
    })

    it('その他のURLの場合、falseを返す', () => {
        expect(isDownloadFileUrl(HTMLPARSER_URLS.RETURN_JSON)).toBe(false)
    })
})
