/**
 * Formats a Date object as 'Month DD, YYYY' (e.g., 'February 26, 2026')
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
