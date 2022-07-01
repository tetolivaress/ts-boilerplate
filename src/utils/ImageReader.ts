export const resizeImage = (src: any, width: number = 240) => {
  const img = new Image()
  img.src = src
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const imageType = img.src.split(';')[0].split(':')[1]
      const allowedImages = ['image/jpeg', 'image/jpg', 'image/png']
      if (allowedImages.indexOf(imageType) === -1) {
        return reject(new Error('Invalid Format'))
      }
      // const invalidImage = allowedImages.filter(allowed => allowed === imageType).length
      // if (invalidImage) return reject(new Error('Invalid Format'))

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      // Set Canvas Height And Width According to Image Size And Scale
      const isLandscape = img.width > img.height
      const canvasWidth: number = isLandscape
        ? width
        : (width * img.width) / img.height
      const canvasHeigth: number = isLandscape
        ? (img.height * width) / img.width
        : width
      canvas.setAttribute('width', canvasWidth.toString())
      canvas.setAttribute('height', canvasHeigth.toString())
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL(src.type, 0.9))
      }
    }
    img.onerror = reject
  })
}
