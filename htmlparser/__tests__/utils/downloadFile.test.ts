import { describe, it, expect } from 'vitest'
import { getDownloadFileName, isDownloadFileUrl } from './../../src/utils/downloadFile'
import { getCurrentDateTimeString } from './../../src/utils/Datetime'
import { HTMLPARSER_URLS } from './../../src/codeinfo/urls'

describe('getDownloadFileName', () => {
    it('JSONダウンロードURLの場合、文字列"解析結果_本日の日付.json"を返す', () => {
        const result = `解析結果_${getCurrentDateTimeString()}.json`
        expect(getDownloadFileName(HTMLPARSER_URLS.DOWNLOAD_JSON)).toBe(result)
    })

    it('CSVダウンロードURLの場合、文字列"解析結果_本日の日付.csv"を返す', () => {
        const result = `解析結果_${getCurrentDateTimeString()}.csv`
        expect(getDownloadFileName(HTMLPARSER_URLS.DOWNLOAD_CSV)).toBe(result)
    })

    it('その他のURLの場合、文字列"解析結果_本日の日付"を返す', () => {
        const result = `解析結果_${getCurrentDateTimeString()}`
        expect(getDownloadFileName(HTMLPARSER_URLS.RETURN_JSON)).toBe(result)
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
