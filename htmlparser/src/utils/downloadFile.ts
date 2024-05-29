import { HTMLPARSER_URLS } from './../codeinfo/urls'

/**
 * ファイルでダウンロード
 * @param {object} data ダウンロードするデータ
 */
export function downloadFile(data) {
    // Blobオブジェクトから新しいオブジェクトURLを作成
    const url = window.URL.createObjectURL(new Blob([data.content]))
    // リンクを作成してクリックすることで、ファイルをダウンロード
    const a = document.createElement('a')
    a.href = url
    a.download = data.fileName // ダウンロードするファイル名を指定
    a.click()
    // オブジェクトURLを解放
    window.URL.revokeObjectURL(url)
}

/**
 * ダウンロードするファイル名を取得
 * @param {string} apiUrl APIのURL
 * @return {string} ファイル名
 */
export function getDownloadFileName(apiUrl: string): string {
    let fileName = 'result'
    if (apiUrl === HTMLPARSER_URLS.DOWNLOAD_JSON) fileName += '.json'
    if (apiUrl === HTMLPARSER_URLS.DOWNLOAD_CSV) fileName += '.csv'
    return fileName
}

/**
 * ダウンロード対象のURLか判定
 * @param {string} apiUrl APIのURL
 * @return {boolean} CSV or JSON: true | other: false
 */
export function isDownloadFileUrl(apiUrl: string): boolean {
    if (apiUrl === HTMLPARSER_URLS.DOWNLOAD_JSON || apiUrl === HTMLPARSER_URLS.DOWNLOAD_CSV)
        return true
    return false
}
