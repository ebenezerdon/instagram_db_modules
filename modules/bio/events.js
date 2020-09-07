import { addEntryToDb } from '../../database.js';

const addBioEventListeners = () => {
  const editBioButton = document.querySelector('.edit-bio-button')
  const editBioForm = document.querySelector('.edit-bio-form')

  editBioButton.addEventListener('click', () => {
    const form = document.querySelector('.edit-bio-form')
    form.style.display = 'block'
  })

  editBioForm.addEventListener('submit', () => {
    event.preventDefault()
    const name = document.querySelector('#name').value
    const about = document.querySelector('#about').value
    addEntryToDb('bio', { name, about })
  })
}

export default addBioEventListeners
