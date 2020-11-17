import EditBioForm from './EditBio.js'
import { getEntryFromDb } from '../../database.js'

const Bio = async () => {
  const userInfo = await getEntryFromDb('bio') || []
  return `
  <section class="bio">
    <div class="profile-photo">
      <img src="https://images.pexels.com/photos/1727280/pexels-photo-1727280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-photo">
    </div>
    <div class="profile-info">
      <p class="name">${userInfo[0] ? userInfo[0].name : 'Please update your bio'}</p>
      <p class="about">${userInfo[0]? userInfo[0].about : ''}</p>
      <button class="edit-bio-button"}>Edit bio</button>
    </div>
    ${EditBioForm()}
  </section>
`}

export default Bio
