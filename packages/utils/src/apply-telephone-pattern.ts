export function applyTelephoneMask(telephone: string): string {
  const rawTelephone = telephone.replace(/\D/g, '')
  // To-be patterns: 088-888-8888
  return rawTelephone.split('').reduce((acc, curr, index) => {
    if (index === 3 || index === 6) {
      return `${acc}-${curr}`
    }
    return `${acc}${curr}`
  }, '')
}
