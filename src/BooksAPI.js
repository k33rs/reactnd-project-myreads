const api = 'https://reactnd-books-api.udacity.com'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  Accept: 'application/json',
  Authorization: token
}

export const get = (bookId, signal) =>
  fetch(`${api}/books/${bookId}`, { headers, signal })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = (signal) =>
  fetch(`${api}/books`, { headers, signal })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book, shelf, signal) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf }),
    signal
  }).then(res => res.json())

export const search = (query, signal) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query }),
    signal
  }).then(res => res.json())
    .then(data => data.books)
