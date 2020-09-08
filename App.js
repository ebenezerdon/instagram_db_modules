import { initializeDb, getEntryFromDb } from './database.js'
import Bio from './modules/bio/Bio.js'
import addBioEventListeners from './modules/bio/events.js';
import Gallery from './modules/gallery/Gallery.js'
import Nav from './modules/nav/Nav.js'

const App = () => {
  // setTimeout(() => {
  //   getEntryFromDb('bio', 9)
  // }, 1000)

  return `
    ${Nav()}
    <div class="container">
      ${Bio()}
      ${Gallery()}
    </div>
  `
}

initializeDb.onsuccess = () => {
  document.getElementById('root').innerHTML = App()
  addBioEventListeners()
}
