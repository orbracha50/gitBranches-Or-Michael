export const utilService = {
  makeId,
  loadFromStorage,
  saveToStorage,
  debounce, 
}


function makeId(length = 5) {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return (data) ? JSON.parse(data) : undefined
}

function debounce(func, delay) {
  let timeoutId
  return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
          func(...args)
      }, delay)
  }
}