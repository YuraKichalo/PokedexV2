export const capitalize = (text: string) => {
  const firstCapitalLetter = text[0].toUpperCase()
  return text.replace(text[0], firstCapitalLetter)
}
