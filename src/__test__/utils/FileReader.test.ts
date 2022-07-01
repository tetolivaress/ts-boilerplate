import 'jest-canvas-mock'
import { dataURLToFile } from '@utils/DataURLToFile'
import { readFileAsB64Async } from '@utils/FileReader'
import { b64Image } from './b64Image'

describe('FileReader', () => {
  it('shoult return a string with image/png', async () => {
    const file = dataURLToFile(b64Image, 'file')
    const b64File = await readFileAsB64Async(file)

    expect(b64File).toContain('image/png')
  })
})
