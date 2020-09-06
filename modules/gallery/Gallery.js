const Gallery = (props) => `
  <input type="file" name="photo" id="addPhotoInput" accept="image/*">
  <label for="addPhotoInput">
    <i class="add-photo fas fa-plus-square"></i>
  </label>
  <div class="gallery-nav"></div>
  <section class="gallery">
    <a href="#" class="item">
      <img src="https://images.pexels.com/photos/4835026/pexels-photo-4835026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </a>
    <a href="#" class="item">
      <img src="https://images.pexels.com/photos/4940300/pexels-photo-4940300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </a>
    <a href="#" class="item">
      <img src="https://images.pexels.com/photos/1719344/pexels-photo-1719344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </a>
    <a href="#" class="item">
      <img src="https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </a>
    <a href="#" class="item">
      <img src="https://images.pexels.com/photos/4926612/pexels-photo-4926612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </a>
    <a href="#" class="item">
      <img src="https://images.pexels.com/photos/4918481/pexels-photo-4918481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </a>
  </section>
`
export default Gallery;
