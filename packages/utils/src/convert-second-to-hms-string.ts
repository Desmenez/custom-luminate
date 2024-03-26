export function convertSecondsToHmsString(seconds: number): string {
  return new Date(seconds * 1000).toISOString().slice(-13, -5)
}
