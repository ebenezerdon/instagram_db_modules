import { addEntryToDb } from '../../database.js'

const addGalleryEventListeners = () => {
  const photoInput = document.querySelector('#addPhotoInput')
  photoInput.addEventListener('change', () => {
    const reader = new FileReader()
    reader.readAsDataURL(photoInput.files[0])

    reader.addEventListener('load', () => {
      addEntryToDb('gallery', reader.result)
    })
  })
}

export default addGalleryEventListeners
