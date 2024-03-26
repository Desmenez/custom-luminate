export function convertIntervalToTimeString(interval: number) {
  const minutes = Math.floor(interval / 60)
    .toString()
    .padStart(2, '0')
  const seconds = Math.abs(interval % 60)
    .toString()
    .padStart(2, '0')

  return {
    minutes,
    seconds,
  }
}
