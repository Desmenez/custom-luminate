/**
 * Check if the code is running on the server side
 * @returns {boolean} - true if the code is running on the server side
 */
export function isSSR(): boolean {
  return typeof window === 'undefined' || !window.document || !window.document.createElement
}
