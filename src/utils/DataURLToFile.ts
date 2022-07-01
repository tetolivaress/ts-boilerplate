export const dataToFile = async (
  url: string,
  filename: string = 'file.jpeg',
  mimeType: string = 'image/jpeg'
) => {
  const fileResponse = await fetch(url)
  const buf = await fileResponse.arrayBuffer()
  const file = new File([buf], filename, { type: mimeType })
  return file
}

export const dataURLToFile = (dataurl: any, filename: any) => {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}
