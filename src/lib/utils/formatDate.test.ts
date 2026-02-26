import { describe, it, expect } from 'vitest'
import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('formats a date as Month DD, YYYY', () => {
    const date = new Date('2026-02-26')
    const result = formatDate(date)
    expect(result).toBe('February 26, 2026')
  })

  it('handles start of year (January 1st)', () => {
    const date = new Date('2026-01-01')
    const result = formatDate(date)
    expect(result).toBe('January 1, 2026')
  })

  it('handles end of year (December 31st)', () => {
    const date = new Date('2026-12-31')
    const result = formatDate(date)
    expect(result).toBe('December 31, 2026')
  })

  it('returns a string', () => {
    const date = new Date('2026-06-15')
    const result = formatDate(date)
    expect(typeof result).toBe('string')
  })
})
