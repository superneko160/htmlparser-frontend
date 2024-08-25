import { describe, it, expect, vi } from 'vitest'
import { getCurrentDateTimeString } from './../../src/utils/Datetime'

describe('getCurrentDateTimeString', () => {
    it('連結した文字列が合計14文字である（フォーマットとして成立している）', () => {
        const result = getCurrentDateTimeString()
        expect(result).toMatch(/^\d{14}$/)
    })

    it('年月日時分秒を連結した文字列を返す', () => {
        // モックした日時を設定
        const mockDate = new Date(2024, 7, 25, 12, 34, 56) // 2024年8月25日 12:34:56
        vi.useFakeTimers({ shouldAdvanceTime: true })
        vi.setSystemTime(mockDate)

        const result = getCurrentDateTimeString()
        expect(result).toBe('20240825123456')

        vi.useRealTimers() // タイマーをリセット
    })

    it('月日時分秒が1桁の場合、1桁目が0で埋められる（2桁で表示される）', () => {
        // モックした日時を設定（すべての値が1桁の場合）
        const mockDate = new Date(2024, 0, 1, 1, 1, 1) // 2024年1月1日 01:01:01
        vi.useFakeTimers({ shouldAdvanceTime: true })
        vi.setSystemTime(mockDate)

        const result = getCurrentDateTimeString()
        expect(result).toBe('20240101010101')

        vi.useRealTimers() // タイマーをリセット
    })
})
