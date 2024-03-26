interface FormatAsBahtOptions {
  display?: 'name' | 'symbol'
  showFree?: boolean
}

const defaultOptions: FormatAsBahtOptions = {
  display: 'name',
  showFree: true,
}

export const formatAsBaht = (num: number, _options?: FormatAsBahtOptions): string => {
  const options = { ...defaultOptions, ..._options }

  if (num === 0 && options.display === 'name' && options.showFree) {
    return 'ฟรี'
  }

  const numberWithComma = Intl.NumberFormat('en-US').format(num)

  if (options.display === 'name') {
    return `${numberWithComma} บาท`
  }

  return `฿ ${numberWithComma}`
}
