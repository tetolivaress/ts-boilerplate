import { ChangeEvent, useState } from 'react'
import { useForm } from '@hooks/useForm'
// import { dataURLToFile } from '@utils/DataURLToFile'
import { resizeImage } from '@utils/ImageReader'
import { readFileAsB64Async } from '@utils/FileReader'
import Input from '@components/Form/Input'

const ItemForm = () => {
  const [image, setImage] = useState('')
  const { form, handleForm } = useForm({
    id: 0,
    name: '',
    description: ''
  })

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const file = e.target.files[0]
        const b64File = await readFileAsB64Async(file)
        const b64Image = (await resizeImage(b64File)) as string
        // const imageFile = dataURLToFile(b64Image as string, 'newImage')
        setImage(b64Image)
      } catch (error) {
        console.warn('try with another file ', error)
      }
    }
  }

  return (
    <form>
      <Input
        value={form.name}
        onChange={({ target }) => handleForm(target.value, 'name')}
        label="name"
        name="name"
      />
      {/* <textarea
        name="description"
        value={form.description}
        onChange={({ target }) => handleForm(target.value, 'description')}
      /> */}
      <div>
        <div>
          <label htmlFor="image">Image</label>
        </div>
        <div>
          <input type="file" id="image" onChange={handleFile} name="image" />
        </div>
      </div>
      <div>{image && <img src={image} />}</div>
      <div>{JSON.stringify(form, null, 10)}</div>
    </form>
  )
}

export default ItemForm
