import { addEntryToDb } from './database.js'
import Bio from './modules/bio/Bio.js'
import Gallery from './modules/gallery/Gallery.js'
import Nav from './modules/nav/Nav.js'

const App = () => {
  setTimeout(() => {
    // addEntryToDb('bio', {name: 'Jane Butters', gender: 'female'})
  }, 3000)

  return `
    ${Nav({addEntryToDb})}
    <div class="container">
      ${Bio()}
      ${Gallery()}
    </div>
  `
}

document.getElementById('root').innerHTML = App()

const editBioButton = document.querySelector('.edit-bio-button')
editBioButton.addEventListener('click', () => {
  const form = document.querySelector('.edit-bio-form')
  form.style.display = 'block'
})
