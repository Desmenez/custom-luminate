export const getDurationString = (duration: number) => {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration - hours * 3600) / 60)
  const seconds = duration - hours * 3600 - minutes * 60

  const hoursString = hours.toString().padStart(2, '0')
  const minutesString = minutes.toString().padStart(2, '0')
  const secondsString = seconds.toString().padStart(2, '0')

  return `${hoursString}:${minutesString}:${secondsString}`
}
