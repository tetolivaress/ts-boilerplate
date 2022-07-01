export const readFileAsB64Async = (file: File | Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      return resolve(reader.result)
    }

    reader.onerror = reject

    reader.readAsDataURL(file)
  })
}
