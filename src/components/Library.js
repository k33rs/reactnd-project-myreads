import React from 'react'
import LibraryContent from './LibraryContent'
import { Link } from 'react-router-dom'

const Library = () => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <LibraryContent />
    <Link to='/search'>
      <div className="open-search">
        <button>Add a book</button>
      </div>
    </Link>
  </div>
)

export default Library
