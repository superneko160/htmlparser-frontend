/**
 * 現在の日付の文字列を取得
 * @return {string} 現在の年月日時分秒
 */
export function getCurrentDateTimeString(): string {
    const now = new Date()

    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    return `${year}${month}${day}${hours}${minutes}${seconds}`
}
