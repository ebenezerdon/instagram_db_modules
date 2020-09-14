
const addGalleryEventListeners = () => {
  const photoInput = document.querySelector('#addPhotoInput')
  photoInput.addEventListener('change', () => {
    const reader = new FileReader()
    reader.readAsDataURL(photoInput.files[0])

    reader.addEventListener('load', () => {
      console.log(reader.result)
    })
  })
}

export default addGalleryEventListeners
