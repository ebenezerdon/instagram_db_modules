import EditBioForm from './forms/EditBio.js';

const Bio = () => {
  return `
  <section class="bio">
    <div class="profile-photo">
      <img src="https://images.pexels.com/photos/1727280/pexels-photo-1727280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-photo">
    </div>
    <div class="profile-info">
      <p class="name">Jane Butters</p>
      <p class="about">Hi, I'm Jane. I used to be indecisive but now I’m not so sure.</p>
      <button class="edit-bio-button"}>Edit bio</button>
    </div>
    ${EditBioForm()}
  </section>
`}

export default Bio;
