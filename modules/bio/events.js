import { addEntryToDb, clearAllEntries } from '../../database.js';

const addBioEventListeners = () => {
  const editBioButton = document.querySelector('.edit-bio-button')
  const editBioForm = document.querySelector('.edit-bio-form')
  const cancelFormButton = document.querySelector('.cancel-edit-bio')

  editBioButton.addEventListener('click', () => {
    editBioForm.style.display = 'block'
  })

  editBioForm.addEventListener('submit', () => {
    event.preventDefault()
    const name = document.querySelector('#name').value
    const about = document.querySelector('#about').value
    clearAllEntries('bio')
    addEntryToDb('bio', { name, about })
  })

  cancelFormButton.addEventListener('click', () => {
    editBioForm.style.display = 'none'
  })
}

export default addBioEventListeners
