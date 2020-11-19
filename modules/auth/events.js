import { addEntryToDb, getEntryFromDb, clearAllEntries } from '../../database.js'

const addAuthEventListeners = async () => {
  const authSection = document.querySelector('.auth')
  const showAuthButton = document.querySelector('.show-auth-button')
  const authForm = document.querySelector('.auth-form')
  const cancelAuthButton = document.querySelector('.cancel-auth-button')
  const signupButton = document.querySelector('.signup-button')
  const signoutButton = document.querySelector('.signout-button')
  const baseUrl = 'https://ebenezer-social.herokuapp.com/api/v1/auth'

  const authData = await getEntryFromDb('auth')
  if (authData[0]) {
    signoutButton.style.visibility = 'visible'
  } else {
    authSection.style.display = 'block'
  }

  showAuthButton.addEventListener('click', () => {
    authForm.style.display = 'block'
  })

  cancelAuthButton.addEventListener('click', () => {
    authForm.style.display = 'none'
  })

  signupButton.addEventListener('click', async(event) => {
    event.preventDefault()
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if (username.trim().length < 3) return alert('username should be 3 characters or more')
    if (password.trim().length < 6) return alert('password should be 6 characters or more')

    try {
      signupButton.disabled = true
      const user = await fetch(`${baseUrl}/signup`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const response = await user.json()
      if (response.status !== 'error') {
        addEntryToDb('auth', { token: response.data.token})
        authSection.style.display = 'none'
        signoutButton.style.display = 'block'
      }

      alert(response.message)

    } catch(error) { alert(error) }

    signupButton.disabled = false
  })

  signoutButton.addEventListener('click', async () => {
    clearAllEntries('auth')
    authSection.style.display = 'block'
    signoutButton.style.visibility = 'hidden'
  })
}

export default addAuthEventListeners
