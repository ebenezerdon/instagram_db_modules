import { initializeDb, getEntryFromDb } from './database.js'
import Auth from './modules/auth/AuthForm.js'
import Bio from './modules/bio/Bio.js'
import addAuthEventListeners from './modules/auth/events.js'
import addBioEventListeners from './modules/bio/events.js'
import Gallery from './modules/gallery/Gallery.js'
import { addGalleryEventListeners, addImagesToGallery }  from './modules/gallery/events.js'
import Nav from './modules/nav/Nav.js'

const App = async () => {
  return `
    ${Nav()}
    <div class="container">
      ${await Bio()}
      ${Auth()}
      ${Gallery()}
    </div>
  `
}

initializeDb.onsuccess = async () => {
  document.getElementById('root').innerHTML = await App()
  addBioEventListeners()
  await addAuthEventListeners()
  addGalleryEventListeners()
  addImagesToGallery()
}
