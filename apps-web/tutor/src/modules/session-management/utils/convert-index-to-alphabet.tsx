export function convertIndexToAlphabet(index: number) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (index > alphabet.length) {
    throw new Error('Index is out of range')
  }
  return alphabet[index]
}
