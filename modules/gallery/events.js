import { addEntryToDb, getEntryFromDb } from '../../database.js'

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

const addImagesToGallery = async () => {
  const gallerySection = document.querySelector('.gallery')
  const galleryData = await getEntryFromDb('gallery')
  const galleryItems = galleryData.map(singlePhoto => {
    console.log({singlePhoto});
    return `
      <a href="#" class="item">
        <img alt="stuff" src=${singlePhoto}>
      </a>
    `
  })
  gallerySection.style.display = 'grid'
  gallerySection.innerHTML = galleryItems.join('')
}

export { addGalleryEventListeners, addImagesToGallery }
