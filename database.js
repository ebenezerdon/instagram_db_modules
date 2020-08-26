let database = {}

const request = indexedDB.open('instagram', 1)

request.onerror = () => {
  console.log('Error creating or accessing db')
}

request.onsuccess = event => {
  database = request.result
  console.log('Success creating or accessing db')
}

request.onupgradeneeded = () => {
  database = request.result

  const bio = database.createObjectStore('bio')
  bio.createIndex('name')
  bio.createIndex('displayImageUrl')
  bio.createIndex('description')

  const gallery = database.createObjectStore('gallery')
  gallery.createIndex('id', 'id', { unique: true })
  gallery.createIndex('text', 'text')
  gallery.createIndex('imageUrl', 'imageUrl')
}

export default database
