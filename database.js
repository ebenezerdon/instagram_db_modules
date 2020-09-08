let database

const initializeDb = indexedDB.open('instagram', 1)

initializeDb.onsuccess = event => {
  database = event.target.result
  console.log('Success creating or accessing db')
}

initializeDb.onupgradeneeded = event => {
  database = event.target.result
  database.createObjectStore('bio', {autoIncrement: true})
  database.createObjectStore('gallery', {autoIncrement: true})
}

initializeDb.onerror = event => {
  alert('Error creating or accessing db')
  console.log(event.target)
}

const addEntryToDb = (storeName, entry) => {
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.add(entry)

  transaction.oncomplete = () => alert(`Entry added to ${storeName}!`)
  transaction.onerror = event => {
    console.log(`error adding Entry to ${storeName}.`)
    console.log(event.target.error);
  }
}

const getEntryFromDb = (storeName, id) => {
  const transaction = initializeDb.result.transaction([storeName])
  const store = transaction.objectStore(storeName)
  const request = id ? store.get(id) : store.getAll()
  request.onerror = () => {
    console.log('error getting data from the store');
  }

  request.onsuccess = () => {
    console.log('success', request.result)
    return request.result
  }

  return setTimeout(() => {
    request.onsuccess()
  }, 200);
}

const clearAllEntries = (storeName) => {
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.clear()
}

export { initializeDb, addEntryToDb, getEntryFromDb, clearAllEntries }
