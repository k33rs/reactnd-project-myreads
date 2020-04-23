import React from 'react'
import Book from './Book'

const SearchResults = ({ bookids, onShelfChange }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {
        bookids.map(bookid => (
          <li key={bookid}>
            <Book
              id={bookid}
              onShelfChange={onShelfChange}
            />
          </li>
        ))
      }
    </ol>
  </div>
)

export default SearchResults
